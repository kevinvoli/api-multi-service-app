import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateHelpDetailDto {
  @IsNumber()
  @IsNotEmpty()
  iHelpDetailCategoryId: number;

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

  @IsOptional()
  @IsEnum(['Yes', 'No'])
  eShowDetail?: 'Yes' | 'No';

  @IsOptional()
  @IsEnum(['General', 'DeliverAll'])
  eSystem?: 'General' | 'DeliverAll';
}