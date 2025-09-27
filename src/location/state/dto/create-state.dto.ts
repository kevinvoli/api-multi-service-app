import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';

export class CreateStateDto {
  @IsNumber()
  @IsNotEmpty()
  iCountryId: number;

  @IsString()
  @IsNotEmpty()
  vStateCode: string;

  @IsString()
  @IsNotEmpty()
  vState: string;

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  @IsOptional()
  eStatus?: 'Active' | 'Inactive' | 'Deleted' = 'Active';
}