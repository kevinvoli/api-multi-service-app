import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class CreateLocationMasterDto {
  @IsNumber()
  @IsNotEmpty()
  iCountryId: number;

  @IsString()
  @IsNotEmpty()
  vLocationName: string;

  @IsString()
  @IsNotEmpty()
  tLatitude: string;

  @IsString()
  @IsNotEmpty()
  tLongitude: string;

  @IsString()
  @IsNotEmpty()
  vLocationAddress: string;

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  @IsOptional()
  eStatus?: 'Active' | 'Inactive' | 'Deleted' = 'Active';

  @IsEnum([
    'Restrict',
    'VehicleType',
    'FixFare',
    'UserDeliveryCharge',
    'AirportSurcharge',
    'FlyStation',
    'Banner',
    'PromoCode',
  ])
  @IsOptional()
  eFor?:
    | 'Restrict'
    | 'VehicleType'
    | 'FixFare'
    | 'UserDeliveryCharge'
    | 'AirportSurcharge'
    | 'FlyStation'
    | 'Banner'
    | 'PromoCode' = 'Restrict';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eSiteDemo?: 'Yes' | 'No' = 'No';

  @IsString()
  @IsOptional()
  mBoundary?: string;

  @IsString()
  @IsOptional()
  tCentroidLattitude?: string;

  @IsString()
  @IsOptional()
  tCentroidLongitude?: string;
}