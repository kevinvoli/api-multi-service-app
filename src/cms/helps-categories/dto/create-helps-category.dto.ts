import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateHelpsCategoryDto {
  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsNumber()
  iDisplayOrder: number;

  @IsString()
  @IsNotEmpty()
  vTitle: string;

  @IsEnum(['Front', 'Admin', 'RiderApp', 'DriverApp', 'General'])
  @IsNotEmpty()
  eTopic: 'Front' | 'Admin' | 'RiderApp' | 'DriverApp' | 'General';
}