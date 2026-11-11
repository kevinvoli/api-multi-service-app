import { validateEnv } from './env.validation';

describe('validateEnv', () => {
  const db = { DB_HOST: 'localhost', DB_USERNAME: 'u', DB_DATABASE: 'amygo1' };
  const secret = 's'.repeat(32);

  it('accepte les variables DB séparées en développement', () => {
    expect(() => validateEnv({ ...db, NODE_ENV: 'development' })).not.toThrow();
  });

  it('accepte DB_URL à la place des variables séparées', () => {
    expect(() =>
      validateEnv({
        DB_URL: 'mysql://u:p@h:3306/db',
        NODE_ENV: 'test',
      }),
    ).not.toThrow();
  });

  it('refuse une configuration DB incomplète', () => {
    expect(() =>
      validateEnv({ DB_HOST: 'localhost', NODE_ENV: 'development' }),
    ).toThrow(/DB_USERNAME, DB_DATABASE/);
  });

  it('exige JWT_SECRET et CORS_ORIGINS en production', () => {
    expect(() => validateEnv({ ...db, NODE_ENV: 'production' })).toThrow(
      /JWT_SECRET, CORS_ORIGINS/,
    );
    expect(() =>
      validateEnv({
        ...db,
        NODE_ENV: 'production',
        JWT_SECRET: secret,
        CORS_ORIGINS: 'https://admin.amygo.com',
      }),
    ).not.toThrow();
  });

  it.each([undefined, 'staging'])(
    'exige JWT_SECRET et CORS_ORIGINS quand NODE_ENV vaut %s',
    (nodeEnv) => {
      expect(() => validateEnv({ ...db, NODE_ENV: nodeEnv })).toThrow(
        /JWT_SECRET, CORS_ORIGINS/,
      );
      expect(() =>
        validateEnv({ ...db, NODE_ENV: nodeEnv, JWT_SECRET: secret }),
      ).toThrow(/CORS_ORIGINS/);
      expect(() =>
        validateEnv({
          ...db,
          NODE_ENV: nodeEnv,
          JWT_SECRET: secret,
          CORS_ORIGINS: 'https://admin.amygo.com',
        }),
      ).not.toThrow();
    },
  );

  it.each(['development', 'test'])(
    'n exige pas CORS_ORIGINS en %s',
    (nodeEnv) => {
      expect(() => validateEnv({ ...db, NODE_ENV: nodeEnv })).not.toThrow();
    },
  );

  it('refuse un JWT_SECRET de 31 caractères hors development/test', () => {
    expect(() => validateEnv({ ...db, JWT_SECRET: 's'.repeat(31) })).toThrow(
      /invalides : JWT_SECRET/,
    );
    expect(() =>
      validateEnv({
        ...db,
        NODE_ENV: 'production',
        JWT_SECRET: 's'.repeat(31),
        CORS_ORIGINS: 'https://admin.amygo.com',
      }),
    ).toThrow(/JWT_SECRET/);
  });

  it.each(['development', 'test'])(
    'n exige pas JWT_SECRET en %s',
    (nodeEnv) => {
      expect(() => validateEnv({ ...db, NODE_ENV: nodeEnv })).not.toThrow();
      expect(() =>
        validateEnv({ ...db, NODE_ENV: nodeEnv, JWT_SECRET: 'court' }),
      ).not.toThrow();
    },
  );

  it.each(['abc', '-1', '1.5', ' 1'])(
    'refuse TRUST_PROXY_HOPS invalide (%s)',
    (hops) => {
      expect(() =>
        validateEnv({ ...db, NODE_ENV: 'test', TRUST_PROXY_HOPS: hops }),
      ).toThrow(/TRUST_PROXY_HOPS/);
    },
  );

  it.each(['0', '1', '2', ''])('accepte TRUST_PROXY_HOPS=%s', (hops) => {
    expect(() =>
      validateEnv({ ...db, NODE_ENV: 'test', TRUST_PROXY_HOPS: hops }),
    ).not.toThrow();
  });
});
