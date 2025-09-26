import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class CreateAirportLocationMasterDto {
  @IsNumber()
  @IsNotEmpty()
  iCountryId: number;

  @IsString()
  @IsNotEmpty()
  vLocationName: string;

  @IsString()
  @IsNotEmpty()
  tPassengerLatitude: string;

  @IsString()
  @IsNotEmpty()
  tPassengerLongitude: string;

  @IsString()
  @IsNotEmpty()
  tDriverLatitude: string;

  @IsString()
  @IsNotEmpty()
  tDriverLongitude: string;

  @IsEnum(['Active', 'Inactive'])
  @IsOptional()
  eStatus?: 'Active' | 'Inactive' = 'Active';
}