import { IsString, IsNotEmpty, IsEnum, IsInt } from 'class-validator';

export class CreatePaymentCustomerInfoDto {
  @IsInt()
  @IsNotEmpty()
  iMemberId: number;

  @IsEnum(['Passenger', 'Driver'])
  @IsNotEmpty()
  eUserType: 'Passenger' | 'Driver';

  @IsString()
  @IsNotEmpty()
  tCustomerId: string;

  @IsString()
  @IsNotEmpty()
  vPaymentMethod: string;

  @IsEnum(['Test', 'Live'])
  @IsNotEmpty()
  ePaymentEnv: 'Test' | 'Live';
}