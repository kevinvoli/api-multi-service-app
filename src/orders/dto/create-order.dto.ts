import { IsNotEmpty, IsNumber, IsString, IsEnum } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  iServiceId: number;

  @IsNumber()
  @IsNotEmpty()
  iUserId: number;

  @IsNumber()
  @IsNotEmpty()
  iCompanyId: number;

  @IsNumber()
  @IsNotEmpty()
  iUserAddressId: number;

  @IsString()
  @IsNotEmpty()
  vTimeZone: string;

  @IsNumber()
  @IsNotEmpty()
  fNetTotal: number;

  @IsEnum(['Cash', 'Card', 'Wallet'])
  @IsNotEmpty()
  ePaymentOption: 'Cash' | 'Card' | 'Wallet';
}