import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsInt,
  IsEmail,
  IsOptional,
  IsEnum,
  MaxLength,
} from 'class-validator';

export class CreatePaymentRequestDto {
  @IsString()
  @IsNotEmpty()
  vRideNo: string;

  @IsInt()
  @IsNotEmpty()
  iDriverId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vLastName: string;

  @IsEmail()
  @IsNotEmpty()
  vEmail: string;

  @IsString()
  @IsNotEmpty()
  vCode: string;

  @IsString()
  @IsNotEmpty()
  vPhone: string;

  @IsNumber()
  @IsNotEmpty()
  fAmount: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vCurrency: string;

  @IsString()
  @IsNotEmpty()
  vBankAccountHolderName: string;

  @IsString()
  @IsNotEmpty()
  vBankName: string;

  @IsString()
  @IsNotEmpty()
  vAccountNumber: string;

  @IsString()
  @IsNotEmpty()
  vBicSwiftCode: string;

  @IsString()
  @IsNotEmpty()
  vBankLocation: string;

  @IsEnum(['', 'Yes', 'No'])
  @IsOptional()
  eMarkAsDone: '' | 'Yes' | 'No';

  @IsString()
  @IsNotEmpty()
  vBookingNo: string;
}