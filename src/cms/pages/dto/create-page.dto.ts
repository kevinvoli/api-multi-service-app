import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreatePageDto {
  @IsString()
  @IsNotEmpty()
  vPageName: string;

  @IsOptional()
  @IsString()
  iFrameCode?: string;

  @IsOptional()
  @IsString()
  vImage?: string;

  @IsOptional()
  @IsString()
  vImage1?: string;

  @IsOptional()
  @IsString()
  vImage2?: string;

  @IsOptional()
  @IsString()
  vTitle?: string;

  @IsOptional()
  @IsString()
  tMetaKeyword?: string;

  @IsOptional()
  @IsString()
  tMetaDescription?: string;

  @IsOptional()
  @IsNumber()
  iOrderBy?: number;

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsOptional()
  @IsString()
  vPageTitleEn?: string;

  @IsString()
  @IsNotEmpty()
  vPageTitleFr: string;

  @IsOptional()
  @IsString()
  tPageDescEn?: string;

  @IsString()
  @IsNotEmpty()
  tPageDescFr: string;

  @IsOptional()
  @IsString()
  pageSubtitle?: string;

  @IsOptional()
  @IsEnum([
    'General',
    'Ride',
    'Delivery',
    'Ride,Delivery',
    'UberX',
    'food',
    'DeliverAll',
    'Ride,Delivery,UberX',
  ])
  eFor?:
    | 'General'
    | 'Ride'
    | 'Delivery'
    | 'Ride,Delivery'
    | 'UberX'
    | 'food'
    | 'DeliverAll'
    | 'Ride,Delivery,UberX';
}