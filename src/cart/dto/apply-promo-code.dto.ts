import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class ApplyPromoCodeDto {
  @IsInt()
  iUserId: number;

  @IsString()
  @IsNotEmpty()
  vCouponCode: string;

  @IsNumber()
  @Min(0)
  fNetTotal: number;

  @IsNumber()
  @Min(0)
  fDeliveryCharge: number;

  @IsOptional()
  @IsInt()
  iCompanyId?: number;
}
