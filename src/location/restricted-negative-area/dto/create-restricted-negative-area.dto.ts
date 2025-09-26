import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class CreateRestrictedNegativeAreaDto {
  @IsNumber()
  @IsNotEmpty()
  iLocationId: number;

  @IsNumber()
  @IsNotEmpty()
  iCountryId: number;

  @IsNumber()
  @IsNotEmpty()
  iStateId: number;

  @IsNumber()
  @IsNotEmpty()
  iCityId: number;

  @IsString()
  @IsNotEmpty()
  vAddress: string;

  @IsEnum(['All', 'Pick Up', 'Drop Off'])
  @IsOptional()
  eRestrictType?: 'All' | 'Pick Up' | 'Drop Off' = 'All';

  @IsEnum(['Allowed', 'Disallowed'])
  @IsNotEmpty()
  eType: 'Allowed' | 'Disallowed';

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  @IsOptional()
  eStatus?: 'Active' | 'Inactive' | 'Deleted' = 'Active';
}