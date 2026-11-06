type Env = Record<string, string | undefined>;

// Les services externes restent optionnels : chaque service gère son propre repli (voir .env.example).
export function validateEnv(env: Env): Env {
  const missing: string[] = [];
  const hasDbUrl = !!env.DB_URL;

  if (!hasDbUrl) {
    for (const key of ['DB_HOST', 'DB_USERNAME', 'DB_DATABASE']) {
      if (!env[key]) missing.push(key);
    }
  }

  if (env.NODE_ENV === 'production') {
    if (!env.JWT_SECRET) missing.push('JWT_SECRET');
    if (!env.CORS_ORIGINS) missing.push('CORS_ORIGINS');
  }

  if (missing.length) {
    throw new Error(
      `Variables d'environnement manquantes : ${missing.join(', ')}`,
    );
  }
  return env;
}
