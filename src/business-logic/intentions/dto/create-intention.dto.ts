import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateIntentionDto {
  @IsOptional()
  @IsInt()
  vehiculeTypeId?: number;

  @IsString()
  type: string;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsInt()
  serviceId: number;

  @IsOptional()
  @IsInt()
  storeId?: number;

  @IsOptional()
  @IsInt()
  itemId?: number;

  @IsOptional()
  @IsString()
  commune?: string;

  @IsOptional()
  @IsString()
  startLong?: string;

  @IsOptional()
  @IsString()
  startLat?: string;

  @IsOptional()
  @IsString()
  communeEnd?: string;

  @IsOptional()
  @IsString()
  endLong?: string;

  @IsOptional()
  @IsString()
  endLat?: string;
}