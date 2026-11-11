import { JWT_SECRET_MIN_LENGTH } from '../../../auth/jwt-secret';
import { isDevOrTestEnv } from '../../../common/utils/runtime-env';

type Env = Record<string, string | undefined>;

// Les services externes restent optionnels : chaque service gère son propre repli (voir .env.example).
export function validateEnv(env: Env): Env {
  const missing: string[] = [];
  const invalid: string[] = [];
  const hasDbUrl = !!env.DB_URL;

  if (!hasDbUrl) {
    for (const key of ['DB_HOST', 'DB_USERNAME', 'DB_DATABASE']) {
      if (!env[key]) missing.push(key);
    }
  }

  if (!isDevOrTestEnv(env.NODE_ENV)) {
    if (!env.JWT_SECRET) {
      missing.push('JWT_SECRET');
    } else if (env.JWT_SECRET.length < JWT_SECRET_MIN_LENGTH) {
      invalid.push(
        `JWT_SECRET (${JWT_SECRET_MIN_LENGTH} caractères minimum hors development/test)`,
      );
    }
    if (!env.CORS_ORIGINS) missing.push('CORS_ORIGINS');
  }

  if (env.TRUST_PROXY_HOPS && !/^\d+$/.test(env.TRUST_PROXY_HOPS)) {
    invalid.push('TRUST_PROXY_HOPS (entier positif ou nul attendu)');
  }

  const errors: string[] = [];
  if (missing.length) {
    errors.push(`Variables d'environnement manquantes : ${missing.join(', ')}`);
  }
  if (invalid.length) {
    errors.push(`Variables d'environnement invalides : ${invalid.join(', ')}`);
  }
  if (errors.length) throw new Error(errors.join(' ; '));
  return env;
}
