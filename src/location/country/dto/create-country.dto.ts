import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  vCountry: string;

  @IsString()
  @IsOptional()
  tCountryNative?: string;

  @IsString()
  @IsNotEmpty()
  vCountryCode: string;

  @IsString()
  @IsOptional()
  vCountryCodeIso_3?: string;

  @IsString()
  @IsNotEmpty()
  vPhoneCode: string;

  @IsString()
  @IsOptional()
  tLatitude?: string;

  @IsString()
  @IsOptional()
  tLongitude?: string;

  @IsString()
  @IsOptional()
  tCapital?: string;

  @IsString()
  @IsOptional()
  tContinent?: string;

  @IsString()
  @IsOptional()
  tLanguages?: string;

  @IsString()
  @IsOptional()
  vTimeZone?: string;

  @IsString()
  @IsOptional()
  tTimeZones?: string;

  @IsString()
  @IsOptional()
  vAlterTimeZone?: string;

  @IsString()
  @IsOptional()
  vEmergencycode?: string;

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  @IsOptional()
  eStatus?: 'Active' | 'Inactive' | 'Deleted' = 'Active';

  @IsEnum(['KMs', 'Miles'])
  @IsOptional()
  eUnit?: 'KMs' | 'Miles' = 'KMs';

  @IsNumber()
  @IsOptional()
  fTax1?: number;

  @IsNumber()
  @IsOptional()
  fTax2?: number;

  @IsString()
  @IsOptional()
  vCurrency?: string;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eEnableToll?: 'Yes' | 'No' = 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eZeroAllowed?: 'Yes' | 'No' = 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eRoundingOffEnable?: 'Yes' | 'No' = 'No';
}