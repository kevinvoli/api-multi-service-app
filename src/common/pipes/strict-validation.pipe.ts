import { ValidationPipe } from '@nestjs/common';

/** Retire les propriétés non déclarées dans le DTO (anti mass-assignment) ; appliqué aux seules routes non-admin. */
export class StrictValidationPipe extends ValidationPipe {
  constructor() {
    super({ transform: true, whitelist: true });
  }
}
