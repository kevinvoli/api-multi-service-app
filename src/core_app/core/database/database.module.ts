import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const INVALID_DB_URL =
  'Invalid DB_URL format (expected mysql://user:pass@host:port/db)';

// URL plutôt qu'une regex : gère les caractères spéciaux encodés (%40 pour @) dans le mot de passe
export function parseDatabaseUrl(url: string) {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(INVALID_DB_URL);
  }
  const database = decodeURIComponent(parsed.pathname.slice(1));
  if (parsed.protocol !== 'mysql:' || !parsed.hostname || !database) {
    throw new Error(INVALID_DB_URL);
  }
  return {
    username: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    host: parsed.hostname,
    port: parseInt(parsed.port || '3306', 10),
    database,
  };
}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const dbUrl = process.env.DB_URL;
        const conn = dbUrl
          ? parseDatabaseUrl(dbUrl)
          : {
              host: process.env.DB_HOST,
              port: parseInt(process.env.DB_PORT || '3306', 10),
              username: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_DATABASE,
            };
        return {
          type: 'mysql',
          ...conn,
          entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
