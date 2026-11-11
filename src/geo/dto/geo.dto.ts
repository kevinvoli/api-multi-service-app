import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { CoordinateString } from '../../common/decorators/coordinate-string.decorator';

export class UpdateDriverPositionDto {
  @CoordinateString()
  lat: string;

  @CoordinateString()
  lon: string;
}

export class NearbyDriversQueryDto {
  @Type(() => Number)
  @IsNumber()
  @Min(-90)
  @Max(90)
  lat: number;

  @Type(() => Number)
  @IsNumber()
  @Min(-180)
  @Max(180)
  lon: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  radiusKm?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  vehicleTypeId?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  companyId?: number;
}

export class CalculateDistanceDto {
  @Type(() => Number)
  @IsNumber()
  @Min(-90)
  @Max(90)
  originLat: number;

  @Type(() => Number)
  @IsNumber()
  @Min(-180)
  @Max(180)
  originLon: number;

  @Type(() => Number)
  @IsNumber()
  @Min(-90)
  @Max(90)
  destLat: number;

  @Type(() => Number)
  @IsNumber()
  @Min(-180)
  @Max(180)
  destLon: number;
}
