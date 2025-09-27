import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
  IsUrl,
  IsDateString,
} from 'class-validator';

export class CreateAdvertiseBannerDto {
  @IsString()
  @IsNotEmpty()
  vBannerTitle: string;

  @IsString()
  @IsNotEmpty()
  vBannerImage: string;

  @IsUrl()
  @IsNotEmpty()
  tRedirectUrl: string;

  @IsOptional()
  @IsEnum(['MainScreen'])
  ePosition?: 'MainScreen';

  @IsNumber()
  @IsNotEmpty()
  iImpression: number;

  @IsDateString()
  dExpiryDate: string;

  @IsNumber()
  iDispOrder: number;

  @IsOptional()
  @IsDateString()
  dAddedDate?: string;

  @IsDateString()
  dStartDate: string;

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsOptional()
  @IsEnum(['Unlimited', 'Limited'])
  eImpression?: 'Unlimited' | 'Limited';

  @IsOptional()
  @IsEnum(['Permanent', 'Custom'])
  eValidityType?: 'Permanent' | 'Custom';
}