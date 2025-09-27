import { IsString, IsNumber, IsEnum, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateMasterServiceCategoryDto {
  @IsString()
  @IsNotEmpty()
  vCategoryName: string;

  @IsEnum([
    'Ride',
    'Deliver',
    'UberX',
    'VideoConsult',
    'Bidding',
    'MedicalServices',
  ])
  @IsNotEmpty()
  eType:
    | 'Ride'
    | 'Deliver'
    | 'UberX'
    | 'VideoConsult'
    | 'Bidding'
    | 'MedicalServices';

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  @IsNotEmpty()
  eStatus: 'Active' | 'Inactive' | 'Deleted';

  @IsString()
  @IsNotEmpty()
  vIconImage: string;

  @IsString()
  @IsOptional()
  vIconImage1: string;

  @IsString()
  @IsOptional()
  vIconImage2: string;

  @IsString()
  @IsOptional()
  vBgImage: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  vTextColor: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  vBgColor: string;

  @IsNumber()
  @IsNotEmpty()
  iDisplayOrder: number;

  @IsNumber()
  @IsNotEmpty()
  iListMaxCount: number;
}