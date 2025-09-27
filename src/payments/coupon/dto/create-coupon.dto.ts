import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsInt,
  IsOptional,
  MaxLength,
  IsDateString,
} from 'class-validator';

export class CreateCouponDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  vCouponCode: string;

  @IsString()
  @IsNotEmpty()
  tDescription: string;

  @IsNumber()
  fDiscount: number;

  @IsEnum(['percentage', 'cash'])
  eType: 'percentage' | 'cash';

  @IsEnum(['Permanent', 'Defined'])
  eValidityType: 'Permanent' | 'Defined';

  @IsDateString()
  @IsOptional()
  dActiveDate: string;

  @IsDateString()
  @IsOptional()
  dExpiryDate: string;

  @IsInt()
  iUsageLimit: number;

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  @IsOptional()
  eStatus: 'Active' | 'Inactive' | 'Deleted';

  @IsEnum(['Ride', 'Delivery', 'UberX', 'DeliverAll', 'General'])
  @IsOptional()
  eSystemType: 'Ride' | 'Delivery' | 'UberX' | 'DeliverAll' | 'General';

  @IsEnum(['1', '0'])
  @IsOptional()
  eFly: '1' | '0';

  @IsEnum(['Public', 'Private'])
  @IsOptional()
  vPromocodeType: 'Public' | 'Private';

  @IsEnum(['', 'All', 'StoreSpecific'])
  @IsOptional()
  eStoreType: '' | 'All' | 'StoreSpecific';

  @IsInt()
  iCompanyId: number;

  @IsInt()
  iServiceId: number;

  @IsEnum(['No', 'Yes'])
  @IsOptional()
  eFreeDelivery: 'No' | 'Yes';

  @IsInt()
  iLocationId: number;
}