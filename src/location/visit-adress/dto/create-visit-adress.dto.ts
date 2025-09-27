import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class CreateVisitAdressDto {
  @IsString()
  @IsNotEmpty()
  vSourceLatitude: string;

  @IsString()
  @IsNotEmpty()
  vSourceLongitude: string;

  @IsString()
  @IsNotEmpty()
  vDestLatitude: string;

  @IsString()
  @IsNotEmpty()
  vDestLongitude: string;

  @IsString()
  @IsNotEmpty()
  vSourceAddresss: string;

  @IsString()
  @IsNotEmpty()
  tDestAddress: string;

  @IsString()
  @IsNotEmpty()
  tDestLocationName: string;

  @IsNumber()
  @IsNotEmpty()
  iDisplayOrder: number;

  @IsNumber()
  @IsNotEmpty()
  iHotelId: number;

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  @IsOptional()
  eStatus?: 'Active' | 'Inactive' | 'Deleted' = 'Active';
}