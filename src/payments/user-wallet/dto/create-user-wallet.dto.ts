import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateUserWalletDto {
  @IsInt()
  @IsNotEmpty()
  iUserId: number;

  @IsEnum(['Driver', 'Rider'])
  @IsNotEmpty()
  eUserType: 'Driver' | 'Rider';

  @IsString()
  @IsNotEmpty()
  iBalance: string;

  @IsEnum(['Credit', 'Debit'])
  @IsOptional()
  eType: 'Credit' | 'Debit';

  @IsString()
  @IsOptional()
  iTripId: string;

  @IsEnum([
    'Deposit',
    'Booking',
    'Refund',
    'Withdrawl',
    'Charges',
    'Referrer',
    'Transfer',
    'Subscription',
    'Outstanding',
  ])
  @IsOptional()
  eFor:
    | 'Deposit'
    | 'Booking'
    | 'Refund'
    | 'Withdrawl'
    | 'Charges'
    | 'Referrer'
    | 'Transfer'
    | 'Subscription'
    | 'Outstanding';

  @IsString()
  @IsNotEmpty()
  tDescription: string;

  @IsEnum(['Settelled', 'Unsettelled'])
  @IsOptional()
  ePaymentStatus: 'Settelled' | 'Unsettelled';

  @IsDateString()
  @IsNotEmpty()
  dDate: string;

  @IsNumber()
  @IsOptional()
  fRatioEur: number;

  @IsNumber()
  @IsOptional()
  fRatioUsd: number;

  @IsNumber()
  @IsOptional()
  fRatioXof: number;

  @IsInt()
  @IsOptional()
  iOrderId: number;

  @IsString()
  @IsOptional()
  iTransactionId: string;

  @IsInt()
  @IsOptional()
  fromUserId: number;

  @IsEnum(['Driver', 'Rider'])
  @IsOptional()
  fromUserType: 'Driver' | 'Rider';

  @IsInt()
  @IsOptional()
  iBiddingPostId: number;

  @IsInt()
  @IsOptional()
  iRentItemPostId: number;

  @IsInt()
  @IsOptional()
  iTmpRentItemPostId: number;

  @IsInt()
  @IsOptional()
  iBookingId: number;
}