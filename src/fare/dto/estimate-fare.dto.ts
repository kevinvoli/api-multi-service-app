import { Type } from 'class-transformer';
import {
  IsDateString,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export const FARE_TYPES = ['Ride', 'Deliver', 'UberX', 'DeliverAll'] as const;
export type FareType = (typeof FARE_TYPES)[number];

export class EstimateFareDto {
  @IsInt()
  vehicleTypeId: number;

  /** distance en km (calculée côté client ou via Google Maps) */
  @IsNumber()
  @Min(0)
  distanceKm: number;

  /** durée en minutes */
  @IsNumber()
  @Min(0)
  durationMin: number;

  @IsOptional()
  @IsIn(FARE_TYPES)
  eType?: FareType;

  /** ISO datetime, défaut = maintenant */
  @IsOptional()
  @IsDateString()
  bookingDate?: string;

  @IsOptional()
  @IsString()
  promoCode?: string;

  @IsOptional()
  @IsInt()
  iUserId?: number;
}

export class EstimateAllFaresQueryDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  distanceKm: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  durationMin: number;

  @IsOptional()
  @IsIn(FARE_TYPES)
  eType?: FareType;

  @IsOptional()
  @IsDateString()
  bookingDate?: string;
}
