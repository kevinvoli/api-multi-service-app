import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

function parseDatabaseUrl(url: string) {
  const match = url.match(/^mysql:\/\/([^:]+):([^@]*)@([^:/]+):?(\d+)?\/(.+)$/);
  if (!match) throw new Error(`Invalid DB_URL format: ${url}`);
  const [, username, password, host, port, database] = match;
  return { username, password, host, port: parseInt(port || '3306', 10), database };
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