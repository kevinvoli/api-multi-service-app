import { IsString, IsNotEmpty, IsInt, IsEnum, IsOptional, IsNumber } from 'class-validator';

export class CreateVehicleTypeDto {
  @IsInt()
  @IsNotEmpty()
  iVehicleCategoryId: number;

  @IsString()
  @IsNotEmpty()
  vVehicleTypeEn: string;

  @IsString()
  @IsNotEmpty()
  vVehicleTypeFr: string;

  @IsEnum(['Regular', 'Fixed', 'Hourly'])
  @IsNotEmpty()
  eFareType: 'Regular' | 'Fixed' | 'Hourly';

  @IsEnum(['Ride', 'Deliver', 'UberX', 'DeliverAll'])
  @IsNotEmpty()
  eType: 'Ride' | 'Deliver' | 'UberX' | 'DeliverAll';

  @IsInt()
  @IsOptional()
  iLocationid?: number;

  @IsInt()
  @IsOptional()
  iCountryId?: number;

  @IsInt()
  @IsOptional()
  iStateId?: number;

  @IsInt()
  @IsOptional()
  iCityId?: number;

  @IsString()
  @IsOptional()
  vAddress?: string;

  @IsString()
  @IsOptional()
  vVehicleType?: string;

  @IsString()
  @IsOptional()
  vRentalAliasEn?: string;

  @IsString()
  @IsOptional()
  vRentalAliasFr?: string;

  @IsNumber()
  @IsOptional()
  fFixedFare?: number;

  @IsNumber()
  @IsOptional()
  fPricePerKm?: number;

  @IsNumber()
  @IsOptional()
  fPricePerMin?: number;

  @IsNumber()
  @IsOptional()
  fPricePerHour?: number;

  @IsNumber()
  @IsOptional()
  fMinHour?: number;

  @IsNumber()
  @IsOptional()
  fTimeSlot?: number;

  @IsNumber()
  @IsOptional()
  fTimeSlotPrice?: number;

  @IsNumber()
  @IsOptional()
  iBaseFare?: number;

  @IsNumber()
  @IsOptional()
  fCommision?: number;

  @IsNumber()
  @IsOptional()
  iMinFare?: number;

  @IsNumber()
  @IsOptional()
  fPickUpPrice?: number;

  @IsNumber()
  @IsOptional()
  fNightPrice?: number;

  @IsEnum(['Active', 'Inactive'])
  @IsOptional()
  ePickStatus?: 'Active' | 'Inactive';

  @IsEnum(['Active', 'Inactive'])
  @IsOptional()
  eNightStatus?: 'Active' | 'Inactive';

  @IsString()
  @IsOptional()
  tPickStartTime?: string;

  @IsString()
  @IsOptional()
  tPickEndTime?: string;

  @IsString()
  @IsOptional()
  tNightStartTime?: string;

  @IsString()
  @IsOptional()
  tNightEndTime?: string;

  @IsInt()
  @IsOptional()
  iPersonSize?: number;

  @IsString()
  @IsOptional()
  vLogo?: string;

  @IsString()
  @IsOptional()
  vLogo1?: string;

  @IsEnum(['Car', 'Bike', 'Cycle', 'Truck', 'Fly'])
  @IsOptional()
  eIconType?: 'Car' | 'Bike' | 'Cycle' | 'Truck' | 'Fly';

  @IsString()
  @IsOptional()
  tMonPickStartTime?: string;

  @IsString()
  @IsOptional()
  tMonPickEndTime?: string;

  @IsNumber()
  @IsOptional()
  fMonPickUpPrice?: number;

  @IsString()
  @IsOptional()
  tTuePickStartTime?: string;

  @IsString()
  @IsOptional()
  tTuePickEndTime?: string;

  @IsNumber()
  @IsOptional()
  fTuePickUpPrice?: number;

  @IsString()
  @IsOptional()
  tWedPickStartTime?: string;

  @IsString()
  @IsOptional()
  tWedPickEndTime?: string;

  @IsNumber()
  @IsOptional()
  fWedPickUpPrice?: number;

  @IsString()
  @IsOptional()
  tThuPickStartTime?: string;

  @IsString()
  @IsOptional()
  tThuPickEndTime?: string;

  @IsNumber()
  @IsOptional()
  fThuPickUpPrice?: number;

  @IsString()
  @IsOptional()
  tFriPickStartTime?: string;

  @IsString()
  @IsOptional()
  tFriPickEndTime?: string;

  @IsNumber()
  @IsOptional()
  fFriPickUpPrice?: number;

  @IsString()
  @IsOptional()
  tSatPickStartTime?: string;

  @IsString()
  @IsOptional()
  tSatPickEndTime?: string;

  @IsNumber()
  @IsOptional()
  fSatPickUpPrice?: number;

  @IsString()
  @IsOptional()
  tSunPickStartTime?: string;

  @IsString()
  @IsOptional()
  tSunPickEndTime?: string;

  @IsNumber()
  @IsOptional()
  fSunPickUpPrice?: number;

  @IsString()
  @IsOptional()
  tNightSurgeData?: string;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eAllowQty?: 'Yes' | 'No';

  @IsInt()
  @IsOptional()
  iMaxQty?: number;

  @IsNumber()
  @IsOptional()
  fVisitFee?: number;

  @IsNumber()
  @IsOptional()
  fCancellationFare?: number;

  @IsInt()
  @IsOptional()
  iCancellationTimeLimit?: number;

  @IsNumber()
  @IsOptional()
  fWaitingFees?: number;

  @IsInt()
  @IsOptional()
  iWaitingFeeTimeLimit?: number;

  @IsInt()
  @IsOptional()
  iDisplayOrder?: number;

  @IsNumber()
  @IsOptional()
  fRadius?: number;

  @IsNumber()
  @IsOptional()
  fDeliveryCharge?: number;

  @IsNumber()
  @IsOptional()
  fDeliveryChargeCancelOrder?: number;

  @IsNumber()
  @IsOptional()
  fPoolPercentage?: number;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  ePoolStatus?: 'Yes' | 'No';

  @IsNumber()
  @IsOptional()
  fTripHoldFees?: number;

  @IsString()
  @IsOptional()
  tTypeDesc?: string;

  @IsEnum(['', 'Single', 'Multi'])
  @IsOptional()
  eDeliveryType?: '' | 'Single' | 'Multi';

  @IsNumber()
  @IsOptional()
  fBufferAmount?: number;

  @IsEnum(['1', '0'])
  @IsOptional()
  eFly?: '1' | '0';

  @IsString()
  @IsOptional()
  tInfoText?: string;

  @IsEnum(['Fixed', 'Incremental'])
  @IsOptional()
  eFareCalcModel?: 'Fixed' | 'Incremental';

  @IsEnum(['No', 'Yes'])
  @IsOptional()
  eDeliveryHelper?: 'No' | 'Yes';

  @IsString()
  @IsOptional()
  tDeliveryHelperNoteUser?: string;

  @IsString()
  @IsOptional()
  tDeliveryHelperNoteDriver?: string;

  @IsEnum(['No', 'Yes'])
  @IsOptional()
  eOtpCodeEnable?: 'No' | 'Yes';
}