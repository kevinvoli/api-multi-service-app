import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateFaqDto {
  @IsNumber()
  @IsNotEmpty()
  iFaqcategoryId: number;

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsNumber()
  iDisplayOrder: number;

  @IsString()
  @IsNotEmpty()
  vTitleEn: string;

  @IsString()
  @IsNotEmpty()
  vTitleFr: string;

  @IsString()
  @IsNotEmpty()
  tAnswerEn: string;

  @IsString()
  @IsNotEmpty()
  tAnswerFr: string;

  @IsEnum(['Front', 'Admin', 'RiderApp', 'DriverApp', 'General'])
  @IsNotEmpty()
  eTopic: 'Front' | 'Admin' | 'RiderApp' | 'DriverApp' | 'General';
}