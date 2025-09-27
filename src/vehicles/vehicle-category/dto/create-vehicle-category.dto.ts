import { IsString, IsNotEmpty, IsInt, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { VehicleCategoryType } from '../entities/vehicle-category.entity';



export class CreateVehicleCategoryDto {
  @IsString()
  @IsNotEmpty()
  vCategoryEn: string;

  @IsString()
  @IsNotEmpty()
  vCategoryFr: string;

  @IsString()
  @IsNotEmpty()
  vCategoryTitleEn: string;

  @IsString()
  @IsNotEmpty()
  vCategoryTitleFr: string;

  @IsString()
  @IsNotEmpty()
  tCategoryDescEn: string;

  @IsString()
  @IsNotEmpty()
  tCategoryDescFr: string;

  @IsEnum(VehicleCategoryType)
  @IsNotEmpty()
  eCatType: VehicleCategoryType;

  @IsInt()
  @IsNotEmpty()
  iMasterVehicleCategoryId: number;

  @IsInt()
  @IsOptional()
  iParentId?: number;

  @IsString()
  @IsOptional()
  vLogo?: string;

  @IsString()
  @IsOptional()
  vLogo1?: string;

  @IsString()
  @IsOptional()
  vHomepageLogo?: string;

  @IsEnum(['Service', 'Provider'])
  @IsOptional()
  ePriceType?: 'Service' | 'Provider';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eBeforeUpload?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eAfterUpload?: 'Yes' | 'No';

  @IsInt()
  @IsOptional()
  iDisplayOrder?: number;

  @IsEnum(['Icon', 'Banner', 'Icon-Banner'])
  @IsOptional()
  eShowType?: 'Icon' | 'Banner' | 'Icon-Banner';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eMaterialCommision?: 'Yes' | 'No';

  @IsString()
  @IsOptional()
  vBannerImage?: string;

  @IsEnum(['', 'Ambulance'])
  @IsOptional()
  eSubCatType?: '' | 'Ambulance';

  @IsEnum(['', 'RideCategory', 'DeliveryCategory', 'DeliverAllCategory'])
  @IsOptional()
  eFor?: '' | 'RideCategory' | 'DeliveryCategory' | 'DeliverAllCategory';

  @IsEnum(['', 'Single', 'Multi'])
  @IsOptional()
  eDeliveryType?: '' | 'Single' | 'Multi';

  @IsInt()
  @IsOptional()
  iServiceId?: number;

  @IsString()
  @IsOptional()
  tBannerButtonText?: string;

  @IsEnum(['', 'Icon', 'Banner'])
  @IsOptional()
  eDetailPageView?: '' | 'Icon' | 'Banner';

  @IsNumber()
  @IsOptional()
  fCommision?: number;

  @IsNumber()
  @IsOptional()
  fWaitingFees?: number;

  @IsInt()
  @IsOptional()
  iWaitingFeeTimeLimit?: number;

  @IsNumber()
  @IsOptional()
  fCancellationFare?: number;

  @IsInt()
  @IsOptional()
  iCancellationTimeLimit?: number;

  @IsInt()
  @IsOptional()
  iDisplayOrderHomepage?: number;

  @IsString()
  @IsOptional()
  lCatDescHomepage?: string;

  @IsString()
  @IsOptional()
  vCatDescbtnHomepage?: string;

  @IsString()
  @IsOptional()
  vCatNameHomepage?: string;

  @IsString()
  @IsOptional()
  vCatSloganHomepage?: string;

  @IsString()
  @IsOptional()
  vCatTitleHomepage?: string;

  @IsString()
  @IsOptional()
  vHomepageBanner?: string;

  @IsString()
  @IsOptional()
  vServiceCatTitleHomepage?: string;

  @IsString()
  @IsOptional()
  vServiceHomepageBanner?: string;

  @IsString()
  @IsOptional()
  eCatViewType?: string;

  @IsString()
  @IsOptional()
  tListDescription?: string;

  @IsString()
  @IsOptional()
  vListLogo?: string;

  @IsString()
  @IsOptional()
  vListLogo1?: string;

  @IsString()
  @IsOptional()
  vListLogo2?: string;

  @IsEnum(['No', 'Yes'])
  @IsOptional()
  eOtpCodeEnable?: 'No' | 'Yes';

  @IsEnum(['No', 'Yes'])
  @IsOptional()
  ePromoteBanner?: 'No' | 'Yes';

  @IsString()
  @IsOptional()
  vPromoteBannerImage?: string;

  @IsString()
  @IsOptional()
  tPromoteBannerTitle?: string;

  @IsString()
  @IsOptional()
  vHomepageLogoOurServices?: string;

  @IsEnum(['No', 'Yes'])
  @IsOptional()
  eVideoConsultEnable?: 'No' | 'Yes';

  @IsNumber()
  @IsOptional()
  eVideoConsultServiceCharge?: number;

  @IsString()
  @IsOptional()
  eVideoServiceDescription?: string;

  @IsNumber()
  @IsOptional()
  fCommissionVideoConsult?: number;

  @IsString()
  @IsOptional()
  vIconDetails?: string;

  @IsEnum(['No', 'Yes'])
  @IsOptional()
  eForMedicalService?: 'No' | 'Yes';

  @IsString()
  @IsOptional()
  tMedicalServiceInfo?: string;

  @IsString()
  @IsOptional()
  vLogo2?: string;

  @IsString()
  @IsOptional()
  vListLogo3?: string;
}