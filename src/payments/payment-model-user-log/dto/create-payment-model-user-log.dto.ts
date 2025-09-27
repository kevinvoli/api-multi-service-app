import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsInt,
  IsDateString,
  MaxLength,
} from 'class-validator';

export class CreatePaymentModelUserLogDto {
  @IsInt()
  @IsNotEmpty()
  iMemberId: number;

  @IsEnum(['Passenger', 'Driver'])
  @IsNotEmpty()
  eUserType: 'Passenger' | 'Driver';

  @IsString()
  @IsNotEmpty()
  tRequestData: string;

  @IsEnum([
    'Ride',
    'Deliver',
    'Multi-Delivery',
    'DeliverAll',
    'UberX',
    'Bidding',
    'RideShare',
  ])
  @IsNotEmpty()
  eType:
    | 'Ride'
    | 'Deliver'
    | 'Multi-Delivery'
    | 'DeliverAll'
    | 'UberX'
    | 'Bidding'
    | 'RideShare';

  @IsDateString()
  @IsNotEmpty()
  dDateTime: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  vPromocode: string;
}