import { HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac } from 'crypto';
import { FindOperator, Repository } from 'typeorm';
import { NotificationsService } from './notifications.service';
import { OtpCode } from './entities/otp-code.entity';

const PHONE = '+33600000001';
const OTHER_PHONE = '+33600000002';
const SECRET = 'otp-test-secret-with-32-chars-min';
const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;

interface FakeOtpRepo {
  rows: OtpCode[];
  repo: Repository<OtpCode>;
  insert: jest.Mock;
  update: jest.Mock;
  findOne: jest.Mock;
  count: jest.Mock;
  sum: jest.Mock;
}

interface PhoneWindowWhere {
  phone: string;
  createdAt: FindOperator<Date>;
  id?: FindOperator<string>;
}

interface UpdateCriteria {
  phone: string;
  id?: FindOperator<string>;
}

interface UpdateParams {
  id: string;
  max?: number;
  now?: Date;
}

const matchesId = (row: OtpCode, id?: FindOperator<string>): boolean => {
  if (!id) return true;
  const rowId = Number(row.id);
  const bound = Number(id.value);
  if (id.type === 'lessThan') return rowId < bound;
  if (id.type === 'lessThanOrEqual') return rowId <= bound;
  throw new Error(`Opérateur non géré : ${id.type}`);
};

const inWindow = (row: OtpCode, where: PhoneWindowWhere): boolean =>
  row.phone === where.phone &&
  matchesId(row, where.id) &&
  row.createdAt.getTime() > where.createdAt.value.getTime();

/**
 * Repository en mémoire qui interprète les requêtes du service comme le ferait MySQL :
 * count/sum filtrés par `MoreThan(createdAt)` et UPDATE conditionnels
 * (`attempts < :max`, `usedAt IS NULL`, `expiresAt > :now`, `attempts + 1`, `attempts - 1`).
 */
function makeFakeOtpRepo(): FakeOtpRepo {
  const rows: OtpCode[] = [];
  let nextId = 1;

  const insert = jest.fn((row: Partial<OtpCode>) => {
    const id = String(nextId++);
    rows.push({
      id,
      attempts: 0,
      usedAt: null,
      createdAt: new Date(),
      ...row,
    } as OtpCode);
    return Promise.resolve({ identifiers: [{ id }] });
  });

  const update = jest.fn(
    (criteria: UpdateCriteria, values: Partial<OtpCode>) => {
      const targets = rows.filter(
        (r) =>
          r.phone === criteria.phone &&
          r.usedAt === null &&
          matchesId(r, criteria.id),
      );
      targets.forEach((r) => Object.assign(r, values));
      return Promise.resolve({ affected: targets.length });
    },
  );

  const remove = jest.fn((criteria: { id: string }) => {
    const index = rows.findIndex((r) => r.id === criteria.id);
    if (index >= 0) rows.splice(index, 1);
    return Promise.resolve({ affected: index >= 0 ? 1 : 0 });
  });

  const findOne = jest.fn(
    (opts: { where: { phone: string } }): Promise<OtpCode | null> => {
      const candidates = rows
        .filter((r) => r.phone === opts.where.phone && r.usedAt === null)
        .sort((a, b) => Number(b.id) - Number(a.id));
      return Promise.resolve(candidates[0] ?? null);
    },
  );

  const count = jest.fn((opts: { where: PhoneWindowWhere }) =>
    Promise.resolve(rows.filter((r) => inWindow(r, opts.where)).length),
  );

  const sum = jest.fn((column: 'attempts', where: PhoneWindowWhere) => {
    const matching = rows.filter((r) => inWindow(r, where));
    return Promise.resolve(
      matching.length ? matching.reduce((acc, r) => acc + r[column], 0) : null,
    );
  });

  const createQueryBuilder = jest.fn(() => {
    let values: Record<string, unknown> = {};
    let sql = '';
    let params: UpdateParams = { id: '' };
    const builder = {
      update: () => builder,
      set: (v: Record<string, unknown>) => {
        values = v;
        return builder;
      },
      where: (s: string, p: UpdateParams) => {
        sql = s;
        params = p;
        return builder;
      },
      execute: () => {
        const row = rows.find((r) => r.id === params.id);
        const eligible =
          !!row &&
          (!sql.includes('attempts < :max') ||
            row.attempts < (params.max as number)) &&
          (!sql.includes('usedAt IS NULL') || row.usedAt === null) &&
          (!sql.includes('expiresAt > :now') ||
            row.expiresAt.getTime() > (params.now as Date).getTime());
        if (eligible) {
          for (const [key, value] of Object.entries(values)) {
            (row as unknown as Record<string, unknown>)[key] =
              typeof value === 'function'
                ? row.attempts +
                  ((value as () => string)().includes('- 1') ? -1 : 1)
                : value;
          }
        }
        return Promise.resolve({ affected: eligible ? 1 : 0 });
      },
    };
    return builder;
  });

  const repo = {
    insert,
    update,
    delete: remove,
    findOne,
    count,
    sum,
    createQueryBuilder,
  } as unknown as Repository<OtpCode>;

  return { rows, repo, insert, update, findOne, count, sum };
}

describe('NotificationsService — OTP', () => {
  let fake: FakeOtpRepo;
  let service: NotificationsService;
  let sendSms: jest.SpyInstance;
  let smsSent: boolean;
  let env: Record<string, string | undefined>;

  const lastSentCode = (): string => {
    const message = (sendSms.mock.calls as string[][]).at(-1)![1];
    return /\d{6}/.exec(message)![0];
  };

  const wrongCodeFor = (code: string): string =>
    code === '000000' ? '111111' : '000000';

  const statusOf = async (promise: Promise<unknown>): Promise<number> => {
    try {
      await promise;
    } catch (error) {
      if (error instanceof HttpException) return error.getStatus();
      throw error;
    }
    throw new Error('Aucune exception levée');
  };

  const failVerifications = async (
    phone: string,
    code: string,
    times: number,
  ): Promise<void> => {
    for (let i = 0; i < times; i++) {
      await service.verifyOtp(phone, wrongCodeFor(code));
    }
  };

  beforeEach(() => {
    fake = makeFakeOtpRepo();
    env = { JWT_SECRET: SECRET, NODE_ENV: 'test' };
    const config = {
      get: (key: string) => env[key],
    } as unknown as ConfigService;
    service = new NotificationsService(fake.repo, config);
    smsSent = true;
    sendSms = jest
      .spyOn(service, 'sendSms')
      .mockImplementation(() => Promise.resolve({ sent: smsSent }));
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  describe('sendOtp', () => {
    it('envoie un SMS contenant un code à 6 chiffres', async () => {
      const result = await service.sendOtp(PHONE);

      expect(result).toEqual({ sent: true });
      expect(sendSms).toHaveBeenCalledTimes(1);
      expect(sendSms).toHaveBeenCalledWith(PHONE, expect.any(String));
      expect(lastSentCode()).toMatch(/^\d{6}$/);
    });

    it('ne stocke jamais le code en clair (HMAC sha256 hexadécimal)', async () => {
      await service.sendOtp(PHONE);
      const code = lastSentCode();

      expect(fake.rows).toHaveLength(1);
      const { codeHash } = fake.rows[0];
      expect(codeHash).toMatch(/^[0-9a-f]{64}$/);
      expect(codeHash).not.toBe(code);
      expect(codeHash).not.toContain(code);
    });

    it('lie le hash au téléphone : un hash recopié sur un autre numéro est refusé', async () => {
      await service.sendOtp(PHONE);
      const code = lastSentCode();
      fake.rows.push({
        ...fake.rows[0],
        id: '99',
        phone: OTHER_PHONE,
      });

      const result = await service.verifyOtp(OTHER_PHONE, code);

      expect(result).toEqual({ valid: false, reason: 'Code incorrect' });
    });

    it('fixe une expiration à 10 minutes', async () => {
      jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });

      await service.sendOtp(PHONE);

      expect(fake.rows[0].expiresAt.getTime()).toBe(
        new Date('2026-11-10T10:10:00Z').getTime(),
      );
    });

    it('invalide les codes précédents : seul le dernier est accepté', async () => {
      await service.sendOtp(PHONE);
      const firstCode = lastSentCode();
      await service.sendOtp(PHONE);
      const secondCode = lastSentCode();

      if (firstCode !== secondCode) {
        const stale = await service.verifyOtp(PHONE, firstCode);
        expect(stale.valid).toBe(false);
      }
      await expect(service.verifyOtp(PHONE, secondCode)).resolves.toEqual({
        valid: true,
      });
      expect(fake.rows.filter((r) => r.usedAt === null)).toHaveLength(0);
    });

    it('n invalide pas les codes d un autre téléphone', async () => {
      await service.sendOtp(OTHER_PHONE);
      const otherCode = lastSentCode();
      await service.sendOtp(PHONE);

      await expect(service.verifyOtp(OTHER_PHONE, otherCode)).resolves.toEqual({
        valid: true,
      });
    });

    it.each(['development', 'test'])(
      'en %s : renvoie le code quand le SMS échoue',
      async (nodeEnv) => {
        env.NODE_ENV = nodeEnv;
        smsSent = false;

        const result = await service.sendOtp(PHONE);

        expect(result.sent).toBe(false);
        expect(result.code).toBe(lastSentCode());
      },
    );

    it('NODE_ENV absent : ne renvoie aucun code quand le SMS échoue', async () => {
      env.NODE_ENV = undefined;
      smsSent = false;

      const result = await service.sendOtp(PHONE);

      expect(result).toEqual({ sent: false });
      expect(result).not.toHaveProperty('code');
    });

    it('en production : ne renvoie aucun code quand le SMS échoue', async () => {
      env.NODE_ENV = 'production';
      smsSent = false;

      const result = await service.sendOtp(PHONE);

      expect(result).toEqual({ sent: false });
      expect(result).not.toHaveProperty('code');
      expect(JSON.stringify(result)).not.toContain(lastSentCode());
    });

    it('en production : ne renvoie aucun code quand le SMS réussit', async () => {
      env.NODE_ENV = 'production';

      const result = await service.sendOtp(PHONE);

      expect(result).toEqual({ sent: true });
    });

    it('dérive la clé HMAC du secret JWT avec le libellé otp', async () => {
      await service.sendOtp(PHONE);
      const code = lastSentCode();
      const key = createHmac('sha256', SECRET).update('otp').digest();
      const expected = createHmac('sha256', key)
        .update(`${PHONE}:${code}`)
        .digest('hex');

      expect(fake.rows[0].codeHash).toBe(expected);
    });

    it('pose createdAt avec l horloge applicative', async () => {
      jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });

      await service.sendOtp(PHONE);

      expect(fake.rows[0].createdAt.getTime()).toBe(
        new Date('2026-11-10T10:00:00Z').getTime(),
      );
    });

    describe('quotas', () => {
      it('refuse un 4e envoi en moins de 15 minutes (429)', async () => {
        jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });
        for (let i = 0; i < 3; i++) {
          await service.sendOtp(PHONE);
          jest.advanceTimersByTime(MINUTE);
        }

        await expect(statusOf(service.sendOtp(PHONE))).resolves.toBe(429);
        expect(fake.rows).toHaveLength(3);
        expect(sendSms).toHaveBeenCalledTimes(3);
      });

      it('envois concurrents : au plus 3 acceptés, aucun SMS pour les refusés', async () => {
        const outcomes = await Promise.allSettled(
          Array.from({ length: 10 }, () => service.sendOtp(PHONE)),
        );

        const accepted = outcomes.filter((o) => o.status === 'fulfilled');
        const refused = outcomes.filter(
          (o): o is PromiseRejectedResult => o.status === 'rejected',
        );
        expect(accepted).toHaveLength(3);
        expect(refused).toHaveLength(7);
        refused.forEach((o) => {
          expect(o.reason).toBeInstanceOf(HttpException);
          expect((o.reason as HttpException).getStatus()).toBe(429);
        });
        expect(sendSms).toHaveBeenCalledTimes(3);
        expect(fake.rows).toHaveLength(3);
        expect(fake.rows.filter((r) => r.usedAt === null)).toHaveLength(1);
      });

      it('les demandes refusées ne prolongent pas le blocage', async () => {
        jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });
        for (let i = 0; i < 3; i++) await service.sendOtp(PHONE);
        jest.advanceTimersByTime(10 * MINUTE);
        await expect(statusOf(service.sendOtp(PHONE))).resolves.toBe(429);
        await expect(statusOf(service.sendOtp(PHONE))).resolves.toBe(429);

        jest.setSystemTime(new Date('2026-11-10T10:15:01Z'));

        await expect(service.sendOtp(PHONE)).resolves.toEqual({ sent: true });
      });

      it('un refus n invalide pas le code actif', async () => {
        for (let i = 0; i < 3; i++) await service.sendOtp(PHONE);
        const activeCode = lastSentCode();

        await expect(statusOf(service.sendOtp(PHONE))).resolves.toBe(429);

        await expect(service.verifyOtp(PHONE, activeCode)).resolves.toEqual({
          valid: true,
        });
      });

      it('réautorise l envoi 15 minutes après le premier', async () => {
        jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });
        for (let i = 0; i < 3; i++) await service.sendOtp(PHONE);

        jest.setSystemTime(new Date('2026-11-10T10:15:01Z'));

        await expect(service.sendOtp(PHONE)).resolves.toEqual({ sent: true });
      });

      it('compte les envois par téléphone', async () => {
        for (let i = 0; i < 3; i++) await service.sendOtp(PHONE);

        await expect(service.sendOtp(OTHER_PHONE)).resolves.toEqual({
          sent: true,
        });
      });

      it('bloque l envoi après 10 échecs cumulés en 24 h (429)', async () => {
        jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });
        await service.sendOtp(PHONE);
        await failVerifications(PHONE, lastSentCode(), 5);
        await service.sendOtp(PHONE);
        await failVerifications(PHONE, lastSentCode(), 4);

        jest.advanceTimersByTime(20 * MINUTE);
        await expect(service.sendOtp(PHONE)).resolves.toEqual({ sent: true });
        await failVerifications(PHONE, lastSentCode(), 1);

        jest.advanceTimersByTime(20 * MINUTE);
        await expect(statusOf(service.sendOtp(PHONE))).resolves.toBe(429);
      });

      it('libère l envoi quand les échecs ont plus de 24 h', async () => {
        jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });
        await service.sendOtp(PHONE);
        await failVerifications(PHONE, lastSentCode(), 5);
        jest.advanceTimersByTime(20 * MINUTE);
        await service.sendOtp(PHONE);
        await failVerifications(PHONE, lastSentCode(), 5);
        jest.advanceTimersByTime(20 * MINUTE);
        await expect(statusOf(service.sendOtp(PHONE))).resolves.toBe(429);

        jest.setSystemTime(new Date('2026-11-11T10:00:01Z'));

        await expect(service.sendOtp(PHONE)).resolves.toEqual({ sent: true });
      });

      it('un succès ne compte pas comme échec dans le cumul 24 h', async () => {
        jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });
        for (let i = 0; i < 3; i++) {
          await service.sendOtp(PHONE);
          await failVerifications(PHONE, lastSentCode(), 3);
          await service.verifyOtp(PHONE, lastSentCode());
          jest.advanceTimersByTime(16 * MINUTE);
        }

        expect(fake.rows.map((r) => r.attempts)).toEqual([3, 3, 3]);
        await expect(service.sendOtp(PHONE)).resolves.toEqual({ sent: true });
      });
    });
  });

  describe('verifyOtp', () => {
    it('accepte le bon code', async () => {
      await service.sendOtp(PHONE);

      await expect(service.verifyOtp(PHONE, lastSentCode())).resolves.toEqual({
        valid: true,
      });
    });

    it('refuse un code entouré d espaces', async () => {
      await service.sendOtp(PHONE);

      const result = await service.verifyOtp(PHONE, ` ${lastSentCode()} `);

      expect(result).toEqual({ valid: false, reason: 'Code incorrect' });
    });

    it('un succès du premier coup laisse attempts à 0', async () => {
      await service.sendOtp(PHONE);

      await service.verifyOtp(PHONE, lastSentCode());

      expect(fake.rows[0].attempts).toBe(0);
      expect(fake.rows[0].usedAt).toBeInstanceOf(Date);
    });

    it('rejette un mauvais code et incrémente attempts', async () => {
      await service.sendOtp(PHONE);
      const wrong = wrongCodeFor(lastSentCode());

      const result = await service.verifyOtp(PHONE, wrong);

      expect(result).toEqual({ valid: false, reason: 'Code incorrect' });
      expect(fake.rows[0].attempts).toBe(1);
      expect(fake.rows[0].usedAt).toBeNull();
    });

    it('retourne un résultat conforme au contrat { valid, reason? }', async () => {
      await service.sendOtp(PHONE);
      const ok = await service.verifyOtp(PHONE, lastSentCode());
      const ko = await service.verifyOtp(PHONE, '123456');

      expect(typeof ok.valid).toBe('boolean');
      expect(ok.reason).toBeUndefined();
      expect(ko.valid).toBe(false);
      expect(typeof ko.reason).toBe('string');
    });

    it('rejette un téléphone sans OTP', async () => {
      await expect(service.verifyOtp(PHONE, '123456')).resolves.toEqual({
        valid: false,
        reason: 'OTP non trouvé ou expiré',
      });
    });

    it('un code envoyé à un numéro ne valide pas un autre numéro', async () => {
      await service.sendOtp(PHONE);

      const result = await service.verifyOtp(OTHER_PHONE, lastSentCode());

      expect(result.valid).toBe(false);
    });

    it('accepte le bon code après 4 échecs', async () => {
      await service.sendOtp(PHONE);
      const code = lastSentCode();
      for (let i = 0; i < 4; i++) {
        await service.verifyOtp(PHONE, wrongCodeFor(code));
      }

      await expect(service.verifyOtp(PHONE, code)).resolves.toEqual({
        valid: true,
      });
    });

    it('bloque après 5 échecs, même avec le bon code', async () => {
      await service.sendOtp(PHONE);
      const code = lastSentCode();
      for (let i = 0; i < 5; i++) {
        await service.verifyOtp(PHONE, wrongCodeFor(code));
      }

      const blocked = await service.verifyOtp(PHONE, code);

      expect(blocked).toEqual({ valid: false, reason: 'Trop de tentatives' });
      expect(fake.rows[0].attempts).toBe(5);
      expect(fake.rows[0].usedAt).toBeNull();
    });

    it('rejette un code expiré (10 minutes passées)', async () => {
      jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });
      await service.sendOtp(PHONE);
      const code = lastSentCode();

      jest.setSystemTime(new Date('2026-11-10T10:10:01Z'));

      await expect(service.verifyOtp(PHONE, code)).resolves.toEqual({
        valid: false,
        reason: 'OTP expiré',
      });
    });

    it('accepte le code juste avant l expiration', async () => {
      jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });
      await service.sendOtp(PHONE);
      const code = lastSentCode();

      jest.setSystemTime(new Date('2026-11-10T10:09:59Z'));

      expect((await service.verifyOtp(PHONE, code)).valid).toBe(true);
    });

    it('consomme le code : valide une seule fois (rejeu refusé sans erreur)', async () => {
      await service.sendOtp(PHONE);
      const code = lastSentCode();

      const first = await service.verifyOtp(PHONE, code);
      const replay = await service.verifyOtp(PHONE, code);

      expect(first.valid).toBe(true);
      expect(replay).toEqual({
        valid: false,
        reason: 'OTP non trouvé ou expiré',
      });
      expect(fake.rows).toHaveLength(1);
      expect(fake.rows[0].usedAt).toBeInstanceOf(Date);
    });

    it('deux vérifications concurrentes ne consomment le code qu une fois', async () => {
      await service.sendOtp(PHONE);
      const code = lastSentCode();

      const results = await Promise.all([
        service.verifyOtp(PHONE, code),
        service.verifyOtp(PHONE, code),
      ]);

      expect(results.filter((r) => r.valid)).toHaveLength(1);
      expect(results.filter((r) => !r.valid)).toHaveLength(1);
    });

    it('bloque la vérification après 10 échecs cumulés en 24 h, même avec le bon code', async () => {
      await service.sendOtp(PHONE);
      const code = lastSentCode();
      fake.rows.push({
        id: '99',
        phone: PHONE,
        codeHash: 'a'.repeat(64),
        expiresAt: new Date(Date.now() + HOUR),
        attempts: 10,
        usedAt: new Date(),
        createdAt: new Date(),
      });

      const blocked = await service.verifyOtp(PHONE, code);

      expect(blocked).toEqual({ valid: false, reason: 'Trop de tentatives' });
      expect(fake.rows[0].attempts).toBe(0);
      expect(fake.rows[0].usedAt).toBeNull();
    });

    it('ignore les échecs de plus de 24 h pour la vérification', async () => {
      jest.useFakeTimers({ now: new Date('2026-11-10T10:00:00Z') });
      fake.rows.push({
        id: '99',
        phone: PHONE,
        codeHash: 'a'.repeat(64),
        expiresAt: new Date('2026-11-09T10:10:00Z'),
        attempts: 10,
        usedAt: new Date('2026-11-09T10:05:00Z'),
        createdAt: new Date('2026-11-09T10:00:00Z'),
      });
      await service.sendOtp(PHONE);

      await expect(service.verifyOtp(PHONE, lastSentCode())).resolves.toEqual({
        valid: true,
      });
    });

    it('5e essai concurrent : exactement une vérification valide, attempts <= 5', async () => {
      await service.sendOtp(PHONE);
      const code = lastSentCode();
      await failVerifications(PHONE, code, 4);

      const results = await Promise.all([
        service.verifyOtp(PHONE, code),
        service.verifyOtp(PHONE, code),
        service.verifyOtp(PHONE, code),
      ]);

      expect(results.filter((r) => r.valid)).toHaveLength(1);
      expect(
        results.filter((r) => r.reason === 'Trop de tentatives'),
      ).toHaveLength(2);
      expect(fake.rows[0].attempts).toBeLessThanOrEqual(5);
      expect(fake.rows[0].usedAt).toBeInstanceOf(Date);
    });

    it('lit l OTP une seule fois par vérification (pas de N+1)', async () => {
      await service.sendOtp(PHONE);
      fake.findOne.mockClear();

      await service.verifyOtp(PHONE, lastSentCode());

      expect(fake.findOne).toHaveBeenCalledTimes(1);
    });
  });
});
