import { ConfigService } from '@nestjs/config';
import { JWT_SECRET_MIN_LENGTH, resolveJwtSecret } from './jwt-secret';

const configWith = (env: Record<string, string | undefined>): ConfigService =>
  ({ get: (key: string) => env[key] }) as unknown as ConfigService;

const secretOf = (length: number): string => 'x'.repeat(length);

describe('resolveJwtSecret', () => {
  it('impose un minimum de 32 caractères', () => {
    expect(JWT_SECRET_MIN_LENGTH).toBe(32);
  });

  it('retourne JWT_SECRET quand il est assez long (NODE_ENV absent)', () => {
    const secret = secretOf(37);
    expect(resolveJwtSecret(configWith({ JWT_SECRET: secret }))).toBe(secret);
  });

  it('accepte un secret de exactement 32 caractères', () => {
    const secret = secretOf(32);
    expect(resolveJwtSecret(configWith({ JWT_SECRET: secret }))).toBe(secret);
  });

  it('refuse un secret de 31 caractères hors development/test', () => {
    expect(() =>
      resolveJwtSecret(configWith({ JWT_SECRET: secretOf(31) })),
    ).toThrow(/trop court/);
    expect(() =>
      resolveJwtSecret(
        configWith({ JWT_SECRET: secretOf(31), NODE_ENV: 'production' }),
      ),
    ).toThrow(/trop court/);
  });

  it('privilégie JWT_SECRET en production', () => {
    const secret = secretOf(40);
    expect(
      resolveJwtSecret(
        configWith({ JWT_SECRET: secret, NODE_ENV: 'production' }),
      ),
    ).toBe(secret);
  });

  it('lève une erreur sans secret quand NODE_ENV est absent', () => {
    expect(() => resolveJwtSecret(configWith({}))).toThrow(
      'JWT_SECRET est requis en production',
    );
  });

  it.each(['production', 'staging'])(
    'lève une erreur sans secret ou avec un secret vide (NODE_ENV=%s)',
    (nodeEnv) => {
      expect(() => resolveJwtSecret(configWith({ NODE_ENV: nodeEnv }))).toThrow(
        'JWT_SECRET est requis en production',
      );
      expect(() =>
        resolveJwtSecret(configWith({ JWT_SECRET: '', NODE_ENV: nodeEnv })),
      ).toThrow();
    },
  );

  it.each(['development', 'test'])(
    'retombe sur une valeur de développement non vide (NODE_ENV=%s)',
    (nodeEnv) => {
      const secret = resolveJwtSecret(configWith({ NODE_ENV: nodeEnv }));
      expect(typeof secret).toBe('string');
      expect(secret.length).toBeGreaterThan(0);
    },
  );

  it.each(['development', 'test'])(
    'accepte un secret court en %s',
    (nodeEnv) => {
      expect(
        resolveJwtSecret(
          configWith({ JWT_SECRET: 'court', NODE_ENV: nodeEnv }),
        ),
      ).toBe('court');
    },
  );
});
