import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreatePaymentTransactionDto {
  @IsString()
  @IsNotEmpty()
  tReferenceNo: string;

  @IsString()
  @IsOptional()
  tTransactionResponse: string;

  @IsDateString()
  @IsNotEmpty()
  dAddedDate: string;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eResponseReceived: 'Yes' | 'No';

  @IsString()
  @IsNotEmpty()
  tRequestData: string;

  @IsEnum(['INITIATED', 'PENDING', 'EXPIRED', 'SUCCESS', 'FAILED'])
  @IsOptional()
  eStatus: 'INITIATED' | 'PENDING' | 'EXPIRED' | 'SUCCESS' | 'FAILED';
}