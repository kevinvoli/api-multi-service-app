import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { NextFunction, Request, Response } from 'express';

export const REQUEST_ID_HEADER = 'x-request-id';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const incoming = req.headers[REQUEST_ID_HEADER];
    const requestId =
      typeof incoming === 'string' && incoming ? incoming : randomUUID();
    res.setHeader(REQUEST_ID_HEADER, requestId);

    const start = Date.now();
    res.on('finish', () => {
      // originalUrl sans query string : les paramètres peuvent contenir des données personnelles (téléphone, email)
      const path = req.originalUrl.split('?')[0];
      const line = `[${requestId}] ${req.method} ${path} ${res.statusCode} ${Date.now() - start}ms`;
      if (res.statusCode >= 500) this.logger.error(line);
      else if (res.statusCode >= 400) this.logger.warn(line);
      else this.logger.log(line);
    });

    next();
  }
}
