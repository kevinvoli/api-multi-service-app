import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  vCity: string;

  @IsNumber()
  @IsNotEmpty()
  iCountryId: number;

  @IsNumber()
  @IsNotEmpty()
  iStateId: number;

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  @IsOptional()
  eStatus?: 'Active' | 'Inactive' | 'Deleted' = 'Active';
}