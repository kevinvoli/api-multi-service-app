import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Derrière un reverse proxy, req.ip (donc le throttler) n'est fiable que si le nombre de proxys de confiance est connu
  const trustProxyHops = Number.parseInt(
    process.env.TRUST_PROXY_HOPS || '0',
    10,
  );
  if (trustProxyHops > 0) {
    app.set('trust proxy', trustProxyHops);
  }

  // Pas de whitelist : la plupart des DTO générés n'ont pas encore de décorateurs class-validator
  // et toutes leurs propriétés seraient supprimées. À durcir domaine par domaine.
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const origins = process.env.CORS_ORIGINS?.split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  app.enableCors({
    origin: origins?.length ? origins : '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
    exposedHeaders: ['X-Request-Id'],
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  Logger.log(
    `API démarrée sur le port ${port} (${process.env.NODE_ENV || 'NODE_ENV non défini'})`,
    'Bootstrap',
  );
}
void bootstrap();
