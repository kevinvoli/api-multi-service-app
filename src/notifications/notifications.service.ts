import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import * as https from 'https';
import { createHmac, randomInt, timingSafeEqual } from 'crypto';
import {
  IsNull,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  Repository,
} from 'typeorm';
import { resolveJwtSecret } from '../auth/jwt-secret';
import { isDevOrTestEnv } from '../common/utils/runtime-env';
import { OtpCode } from './entities/otp-code.entity';

const OTP_TTL_MS = 10 * 60 * 1000;
const OTP_MAX_ATTEMPTS = 5;
const OTP_SEND_WINDOW_MS = 15 * 60 * 1000;
const OTP_MAX_SENDS_PER_WINDOW = 3;
const OTP_FAILURE_WINDOW_MS = 24 * 60 * 60 * 1000;
const OTP_MAX_FAILURES_PER_DAY = 10;

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(
    @InjectRepository(OtpCode)
    private readonly otpRepo: Repository<OtpCode>,
    private readonly config: ConfigService,
  ) {}

  // ─── FCM Push Notification ──────────────────────────────────────────────
  // Remplace : send_notification() dans app_common_functions_ks.php

  async sendPush(
    tokens: string | string[],
    data: Record<string, any>,
  ): Promise<{ success: number; failure: number }> {
    const firebaseKey = process.env.FIREBASE_SERVER_KEY || '';
    if (!firebaseKey) {
      this.logger.warn('FIREBASE_SERVER_KEY non configuré — push ignoré');
      return { success: 0, failure: 0 };
    }

    const registrationIds = Array.isArray(tokens) ? tokens : [tokens];
    const payload = JSON.stringify({
      registration_ids: registrationIds,
      click_action: '.MainActivity',
      priority: 'high',
      data,
    });

    return new Promise((resolve) => {
      const req = https.request(
        {
          hostname: 'fcm.googleapis.com',
          path: '/fcm/send',
          method: 'POST',
          headers: {
            Authorization: `key=${firebaseKey}`,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload),
          },
        },
        (res) => {
          let body = '';
          res.on('data', (chunk) => (body += chunk));
          res.on('end', () => {
            try {
              const parsed = JSON.parse(body) as {
                success?: number;
                failure?: number;
              };
              resolve({
                success: parsed.success ?? 0,
                failure: parsed.failure ?? 0,
              });
            } catch {
              resolve({ success: 0, failure: 1 });
            }
          });
        },
      );
      req.on('error', (err) => {
        this.logger.error('FCM error', err.message);
        resolve({ success: 0, failure: 1 });
      });
      req.write(payload);
      req.end();
    });
  }

  // ─── SMS via Twilio ─────────────────────────────────────────────────────
  // Remplace : sendEmeSms() dans app_common_functions_ks.php

  async sendSms(toPhone: string, message: string): Promise<{ sent: boolean }> {
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    const from = process.env.TWILIO_PHONE_NUMBER;

    if (!sid || !token || !from) {
      this.logger.warn('Twilio non configuré — SMS ignoré');
      return { sent: false };
    }

    const body = new URLSearchParams({
      From: from,
      To: toPhone,
      Body: message,
    }).toString();
    const auth = Buffer.from(`${sid}:${token}`).toString('base64');

    return new Promise((resolve) => {
      const req = https.request(
        {
          hostname: 'api.twilio.com',
          path: `/2010-04-01/Accounts/${sid}/Messages.json`,
          method: 'POST',
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(body),
          },
        },
        (res) => {
          let raw = '';
          res.on('data', (c) => (raw += c));
          res.on('end', () => {
            const ok = res.statusCode ? res.statusCode < 400 : false;
            resolve({ sent: ok });
          });
        },
      );
      req.on('error', (err) => {
        this.logger.error('Twilio SMS error', err.message);
        resolve({ sent: false });
      });
      req.write(body);
      req.end();
    });
  }

  // ─── OTP : générer et envoyer ───────────────────────────────────────────
  // Remplace : ajax_driver_verification.php (type=send)

  async sendOtp(phone: string): Promise<{ sent: boolean; code?: string }> {
    const now = new Date();
    if (
      (await this.countRecentFailures(phone, now)) >= OTP_MAX_FAILURES_PER_DAY
    ) {
      throw this.tooManyRequests();
    }

    const code = String(randomInt(100000, 1000000)); // 6 chiffres

    // Insérer avant de compter : le rang de la ligne (id) départage les requêtes concurrentes sans verrou
    const insertedId = await this.insertOtp(phone, code, now);
    const sendsUpToThisOne = await this.otpRepo.count({
      where: {
        phone,
        id: LessThanOrEqual(insertedId),
        createdAt: MoreThan(new Date(now.getTime() - OTP_SEND_WINDOW_MS)),
      },
    });
    if (sendsUpToThisOne > OTP_MAX_SENDS_PER_WINDOW) {
      // Supprimée (et non seulement invalidée) : une demande refusée ne doit pas prolonger le blocage
      await this.otpRepo.delete({ id: insertedId });
      throw this.tooManyRequests();
    }

    // Un seul code actif par téléphone : les précédents ne sont plus acceptés
    await this.otpRepo.update(
      { phone, usedAt: IsNull(), id: LessThan(insertedId) },
      { usedAt: now },
    );

    const message = `Votre code de vérification Amygo : ${code}`;
    const result = await this.sendSms(phone, message);

    // Seulement en development/test : sinon un échec Twilio exposerait le code au client
    if (!result.sent) {
      return isDevOrTestEnv(this.config.get<string>('NODE_ENV'))
        ? { sent: false, code }
        : { sent: false };
    }
    return { sent: true };
  }

  // ─── OTP : vérifier ────────────────────────────────────────────────────
  // Remplace : ajax_driver_verification.php (type=verify)

  async verifyOtp(
    phone: string,
    code: string,
  ): Promise<{ valid: boolean; reason?: string }> {
    const entry = await this.otpRepo.findOne({
      where: { phone, usedAt: IsNull() },
      order: { id: 'DESC' },
    });
    if (!entry) return { valid: false, reason: 'OTP non trouvé ou expiré' };

    const now = new Date();
    if (
      (await this.countRecentFailures(phone, now)) >= OTP_MAX_FAILURES_PER_DAY
    ) {
      return { valid: false, reason: 'Trop de tentatives' };
    }

    // Chaque vérification consomme un essai de façon atomique : des requêtes concurrentes ne peuvent pas dépasser le plafond
    const attempt = await this.otpRepo
      .createQueryBuilder()
      .update(OtpCode)
      .set({ attempts: () => 'attempts + 1' })
      .where(
        'id = :id AND usedAt IS NULL AND attempts < :max AND expiresAt > :now',
        { id: entry.id, max: OTP_MAX_ATTEMPTS, now },
      )
      .execute();
    if (!attempt.affected) {
      return entry.expiresAt.getTime() <= now.getTime()
        ? { valid: false, reason: 'OTP expiré' }
        : { valid: false, reason: 'Trop de tentatives' };
    }

    const expected = Buffer.from(entry.codeHash, 'hex');
    const received = Buffer.from(this.hashCode(phone, code), 'hex');
    const matches =
      expected.length === received.length &&
      timingSafeEqual(expected, received);
    if (!matches) return { valid: false, reason: 'Code incorrect' };

    // Le -1 annule l'essai compté ci-dessus : un succès ne doit pas peser dans le cumul d'échecs sur 24 h
    const consumed = await this.otpRepo
      .createQueryBuilder()
      .update(OtpCode)
      .set({ usedAt: now, attempts: () => 'attempts - 1' })
      .where('id = :id AND usedAt IS NULL', { id: entry.id })
      .execute();
    if (!consumed.affected) {
      return { valid: false, reason: 'Code incorrect' };
    }
    return { valid: true };
  }

  private async insertOtp(
    phone: string,
    code: string,
    now: Date,
  ): Promise<string> {
    const result = await this.otpRepo.insert({
      phone,
      codeHash: this.hashCode(phone, code),
      expiresAt: new Date(now.getTime() + OTP_TTL_MS),
      createdAt: now,
    });
    return String((result.identifiers[0] as { id: string }).id);
  }

  private tooManyRequests(): HttpException {
    return new HttpException(
      'Trop de demandes de code, réessayez plus tard',
      HttpStatus.TOO_MANY_REQUESTS,
    );
  }

  private async countRecentFailures(phone: string, now: Date): Promise<number> {
    const failures = await this.otpRepo.sum('attempts', {
      phone,
      createdAt: MoreThan(new Date(now.getTime() - OTP_FAILURE_WINDOW_MS)),
    });
    return Number(failures ?? 0);
  }

  // Clé dédiée dérivée du secret JWT : le hash OTP ne partage pas la clé de signature des jetons
  private hashCode(phone: string, code: string): string {
    const key = createHmac('sha256', resolveJwtSecret(this.config))
      .update('otp')
      .digest();
    return createHmac('sha256', key).update(`${phone}:${code}`).digest('hex');
  }
}
