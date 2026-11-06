import { validateEnv } from './env.validation';

describe('validateEnv', () => {
  const db = { DB_HOST: 'localhost', DB_USERNAME: 'u', DB_DATABASE: 'amygo1' };

  it('accepte les variables DB séparées en développement', () => {
    expect(() => validateEnv(db)).not.toThrow();
  });

  it('accepte DB_URL à la place des variables séparées', () => {
    expect(() =>
      validateEnv({ DB_URL: 'mysql://u:p@h:3306/db' }),
    ).not.toThrow();
  });

  it('refuse une configuration DB incomplète', () => {
    expect(() => validateEnv({ DB_HOST: 'localhost' })).toThrow(
      /DB_USERNAME, DB_DATABASE/,
    );
  });

  it('exige JWT_SECRET et CORS_ORIGINS en production', () => {
    expect(() => validateEnv({ ...db, NODE_ENV: 'production' })).toThrow(
      /JWT_SECRET, CORS_ORIGINS/,
    );
    expect(() =>
      validateEnv({
        ...db,
        NODE_ENV: 'production',
        JWT_SECRET: 's',
        CORS_ORIGINS: 'https://admin.amygo.com',
      }),
    ).not.toThrow();
  });
});
