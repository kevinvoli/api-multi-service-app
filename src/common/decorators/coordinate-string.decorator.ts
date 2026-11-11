import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsString, Matches } from 'class-validator';

/** Latitude/longitude stockée en texte en base : accepte un nombre ou une chaîne numérique, normalise en chaîne. */
export const CoordinateString = () =>
  applyDecorators(
    Transform(({ value }: { value: unknown }) =>
      typeof value === 'number' ? String(value) : value,
    ),
    IsString(),
    Matches(/^-?\d+(\.\d+)?$/, { message: 'coordonnée invalide' }),
  );
