import { IsString, IsEnum, IsNotEmpty, MaxLength, IsOptional, IsNumber, IsDate } from 'class-validator';

export class CreateSetupInfoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  vProjectName: string;

  @IsEnum([
    'Ride',
    'Delivery',
    'Ride-Delivery',
    'UberX',
    'Ride-Delivery-UberX',
    'Ride-Delivery-UberX-Shark',
    'Foodonly',
    'Deliverall',
  ])
  @IsOptional()
  eProductType?:
    | 'Ride'
    | 'Delivery'
    | 'Ride-Delivery'
    | 'UberX'
    | 'Ride-Delivery-UberX'
    | 'Ride-Delivery-UberX-Shark'
    | 'Foodonly'
    | 'Deliverall';

  @IsEnum(['Single', 'Multi', 'NONE'])
  @IsOptional()
  eDeliveryType?: 'Single' | 'Multi' | 'NONE';

  @IsString()
  @IsOptional()
  @MaxLength(255)
  vUfxDriver?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  vUfxRider?: string;

  @IsDate()
  @IsOptional()
  dSetupDate?: Date;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eSetupInfo?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eLang?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eLablesConverted?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eAppTypeLabelChanged?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eCurrency?: 'Yes' | 'No';

  @IsNumber()
  @IsOptional()
  iCountryId?: number;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eConfiguration?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eTableTruncate?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eExtraImagesRemoved?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eLablesAdded?: 'Yes' | 'No';

  @IsEnum(['', 'standard', 'enterprise', 'shark'])
  @IsOptional()
  ePackageType?: '' | 'standard' | 'enterprise' | 'shark';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eEnableKiosk?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eEnableHotel?: 'Yes' | 'No';

  @IsString()
  @IsOptional()
  @MaxLength(50)
  vAppTypeX?: string;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eCubeX?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eCubejekX?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eRideX?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eDeliverallX?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eFoodX?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eKingX?: 'Yes' | 'No';

  @IsString()
  @IsOptional()
  @MaxLength(50)
  vDeliverallIds?: string;

  @IsString()
  @IsOptional()
  @MaxLength(5)
  vServiceId?: string;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eConfigurationApplied?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eLanguageFieldsSetup?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eCurrencyFieldsSetup?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eLanguageLabelConversion?: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eOtherTableValueConversion?: 'Yes' | 'No';

  @IsString()
  @IsOptional()
  lAddOnConfiguration?: string;

  @IsString()
  @IsOptional()
  tProjectPortData?: string;

  @IsString()
  @IsOptional()
  tAppPackageData?: string;

  @IsString()
  @IsOptional()
  tPaymentGateways?: string;
}