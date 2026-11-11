import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ListBookingsQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  companyId?: number;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  driverId?: number;
}

export class DriversByCompanyQueryDto {
  @Type(() => Number)
  @IsInt()
  companyId: number;
}

export class SearchRiderQueryDto {
  @IsString()
  @IsNotEmpty()
  phone: string;
}
