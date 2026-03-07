import { Injectable, Logger } from '@nestjs/common';
import * as https from 'https';

// ─── OTP en mémoire (TTL 10 min) ─────────────────────────────────────────────
interface OtpEntry { code: string; expiresAt: number }
const otpStore = new Map<string, OtpEntry>();

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

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
              const parsed = JSON.parse(body);
              resolve({ success: parsed.success ?? 0, failure: parsed.failure ?? 0 });
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

    const body = new URLSearchParams({ From: from, To: toPhone, Body: message }).toString();
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
    const code = String(Math.floor(100000 + Math.random() * 900000)); // 6 chiffres
    otpStore.set(phone, { code, expiresAt: Date.now() + 10 * 60 * 1000 }); // TTL 10 min

    const message = `Votre code de vérification Amygo : ${code}`;
    const result = await this.sendSms(phone, message);

    // En dev, si Twilio non configuré on retourne le code directement
    if (!result.sent) {
      return { sent: false, code };
    }
    return { sent: true };
  }

  // ─── OTP : vérifier ────────────────────────────────────────────────────
  // Remplace : ajax_driver_verification.php (type=verify)

  verifyOtp(phone: string, code: string): { valid: boolean; reason?: string } {
    const entry = otpStore.get(phone);
    if (!entry) return { valid: false, reason: 'OTP non trouvé ou expiré' };
    if (Date.now() > entry.expiresAt) {
      otpStore.delete(phone);
      return { valid: false, reason: 'OTP expiré' };
    }
    if (entry.code !== code.trim()) {
      return { valid: false, reason: 'Code incorrect' };
    }
    otpStore.delete(phone);
    return { valid: true };
  }
}
