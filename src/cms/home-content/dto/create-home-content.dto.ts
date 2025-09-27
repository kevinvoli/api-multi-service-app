import {
  IsString,
  IsOptional,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CreateHomeContentDto {
  @IsString()
  @IsNotEmpty()
  vCode: string;

  @IsString()
  @IsNotEmpty()
  headerFirstLabel: string;

  @IsOptional()
  @IsString()
  headerSecondLabel?: string;

  @IsOptional()
  @IsString()
  homeBannerLeftImage?: string;

  @IsOptional()
  @IsString()
  leftBannerTxt?: string;

  @IsOptional()
  @IsString()
  homeBannerRightImage?: string;

  @IsOptional()
  @IsString()
  rightBannerTxt?: string;

  @IsOptional()
  @IsString()
  thirdSecTitle?: string;

  @IsOptional()
  @IsString()
  thirdSecDesc?: string;

  @IsOptional()
  @IsString()
  thirdMidImageOne?: string;

  @IsOptional()
  @IsString()
  thirdMidTitleOne?: string;

  @IsOptional()
  @IsString()
  thirdMidDescOne?: string;

  @IsOptional()
  @IsString()
  thirdMidImageTwo?: string;

  @IsOptional()
  @IsString()
  thirdMidTitleTwo?: string;

  @IsOptional()
  @IsString()
  thirdMidDescTwo?: string;

  @IsOptional()
  @IsString()
  thirdMidImageThree?: string;

  @IsOptional()
  @IsString()
  thirdMidTitleThree?: string;

  @IsOptional()
  @IsString()
  thirdMidDescThree?: string;

  @IsOptional()
  @IsString()
  mobileAppBgImg?: string;

  @IsOptional()
  @IsString()
  mobileAppLeftImg?: string;

  @IsOptional()
  @IsString()
  mobileAppRightTitle?: string;

  @IsOptional()
  @IsString()
  mobileAppRightDesc?: string;

  @IsOptional()
  @IsString()
  taxiAppBgImg?: string;

  @IsOptional()
  @IsString()
  taxiAppLeftImg?: string;

  @IsOptional()
  @IsString()
  taxiAppRightTitle?: string;

  @IsOptional()
  @IsString()
  taxiAppRightDesc?: string;

  @IsOptional()
  @IsString()
  driverSecFirstLabel?: string;

  @IsOptional()
  @IsString()
  driverSecSecondLabel?: string;

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsOptional()
  @IsString()
  thirdMidImageOne1?: string;

  @IsOptional()
  @IsString()
  thirdMidTitleOne1?: string;

  @IsOptional()
  @IsString()
  thirdMidDescOne1?: string;

  @IsOptional()
  @IsString()
  thirdMidImageTwo1?: string;

  @IsOptional()
  @IsString()
  thirdMidTitleTwo1?: string;

  @IsOptional()
  @IsString()
  thirdMidDescTwo1?: string;

  @IsOptional()
  @IsString()
  thirdMidImageThree1?: string;

  @IsOptional()
  @IsString()
  thirdMidTitleThree1?: string;

  @IsOptional()
  @IsString()
  thirdMidDescThree1?: string;

  @IsOptional()
  @IsString()
  mobileAppBgImg1?: string;

  @IsOptional()
  @IsString()
  manualOrderFirstLabel?: string;

  @IsOptional()
  @IsString()
  manualOrderSecondLabel?: string;

  @IsOptional()
  @IsString()
  manualOrderButtonLabel?: string;

  @IsOptional()
  @IsString()
  manualOrderDesc?: string;

  @IsOptional()
  @IsString()
  manualOrderBgImg?: string;
}