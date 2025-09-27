import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsInt,
  IsDateString,
  IsNumber,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreatePlanPurchaseMasterDto {
  @IsInt()
  @IsNotEmpty()
  iUserId: number;

  @IsDateString()
  @IsNotEmpty()
  dStartDate: string;

  @IsInt()
  @IsNotEmpty()
  iPlanId: number;

  @IsEnum(['Order', 'Ride'])
  @IsOptional()
  ePlanType: 'Order' | 'Ride';

  @IsInt()
  @IsNotEmpty()
  iDuration: number;

  @IsEnum(['Day', 'Month', 'Year'])
  @IsOptional()
  eDurationType: 'Day' | 'Month' | 'Year';

  @IsInt()
  @IsNotEmpty()
  iNOfTripsOrders: number;

  @IsNumber()
  @IsOptional()
  fNoOfKm: number;

  @IsInt()
  @IsNotEmpty()
  iAppliedCount: number;

  @IsInt()
  @IsNotEmpty()
  iAppliedKm: number;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eSubscriptionStatus: 'Yes' | 'No';

  @IsNumber()
  @IsNotEmpty()
  fPaidAmount: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vCurrency: string;

  @IsEnum(['Pending', 'Paid'])
  @IsOptional()
  ePaidStatus: 'Pending' | 'Paid';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eIsExpire: 'Yes' | 'No';

  @IsEnum(['Active', 'Inactive'])
  @IsOptional()
  eStatus: 'Active' | 'Inactive';

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vPaymentGateway: string;
}