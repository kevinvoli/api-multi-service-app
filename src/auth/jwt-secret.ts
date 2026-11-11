import { ConfigService } from '@nestjs/config';
import { isDevOrTestEnv } from '../common/utils/runtime-env';

export const JWT_SECRET_MIN_LENGTH = 32;

const DEV_FALLBACK_SECRET = 'amygo_secret_key';

export function resolveJwtSecret(config: ConfigService): string {
  const secret = config.get<string>('JWT_SECRET');
  if (isDevOrTestEnv(config.get<string>('NODE_ENV'))) {
    return secret || DEV_FALLBACK_SECRET;
  }
  if (!secret) {
    throw new Error(
      `JWT_SECRET est requis en production (${JWT_SECRET_MIN_LENGTH} caractères minimum hors development/test)`,
    );
  }
  if (secret.length < JWT_SECRET_MIN_LENGTH) {
    throw new Error(
      `JWT_SECRET trop court : ${JWT_SECRET_MIN_LENGTH} caractères minimum hors development/test`,
    );
  }
  return secret;
}
