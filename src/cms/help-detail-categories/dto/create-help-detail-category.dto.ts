import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateHelpDetailCategoryDto {
  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsNumber()
  iDisplayOrder: number;

  @IsString()
  @IsNotEmpty()
  vTitle: string;

  @IsString()
  @IsNotEmpty()
  vImage: string;

  @IsString()
  @IsNotEmpty()
  vCode: string;

  @IsNumber()
  iUniqueId: number;

  @IsOptional()
  @IsEnum(['General', 'DeliverAll'])
  eSystem?: 'General' | 'DeliverAll';
}