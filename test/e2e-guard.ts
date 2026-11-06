import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

// Les specs e2e vident des tables (TRUNCATE) : on refuse de tourner ailleurs que sur une base de test.
// Le .env est relu ici car ConfigModule ne le charge qu'à l'import d'AppModule, après ce fichier.
const envPath = join(__dirname, '..', '.env');
const fileEnv: Record<string, string> = {};
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const i = line.indexOf('=');
    if (i > 0 && !line.trimStart().startsWith('#')) {
      fileEnv[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
}
const env = (key: string) => process.env[key] ?? fileEnv[key];

const dbUrl = env('DB_URL');
const database = dbUrl
  ? decodeURIComponent(new URL(dbUrl).pathname.slice(1))
  : env('DB_DATABASE');

if (env('NODE_ENV') !== 'test' || !/test/i.test(database ?? '')) {
  throw new Error(
    `Tests e2e refusés : NODE_ENV=test et une base dont le nom contient "test" sont requis (base actuelle : ${database ?? 'aucune'}).`,
  );
}
