import { applyDecorators, UseGuards } from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

export const RateLimit = (limit: number, ttlMs: number) =>
  applyDecorators(
    UseGuards(ThrottlerGuard),
    Throttle({ default: { limit, ttl: ttlMs } }),
  );
