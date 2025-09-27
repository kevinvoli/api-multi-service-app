import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateBannerDto {
  @IsOptional()
  @IsNumber()
  iServiceId?: number;

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
  @IsEnum(['', 'Genie', 'Runner'])
  eBuyAnyService?: '' | 'Genie' | 'Runner';

  @IsOptional()
  @IsString()
  iLocationid?: string;

  @IsOptional()
  @IsString()
  vStatusBarColor?: string;

  @IsOptional()
  @IsEnum(['Ride', 'Deliver', 'UberX', 'DeliverAll', ''])
  eType?: 'Ride' | 'Deliver' | 'UberX' | 'DeliverAll' | '';

  @IsOptional()
  @IsEnum(['General', 'AppHomeScreen', 'Promotion'])
  eFor?: 'General' | 'AppHomeScreen' | 'Promotion';

  @IsOptional()
  @IsNumber()
  iVehicleCategoryId?: number;
}