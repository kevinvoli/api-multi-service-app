import { IsString, IsNotEmpty, IsEnum, IsInt, IsDateString, IsOptional } from 'class-validator';

export class CreateWalletMoneyReferrerEmailDto {
  @IsInt()
  @IsNotEmpty()
  iTripId: number;

  @IsString()
  @IsNotEmpty()
  tMailInfo: string;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eSent: 'Yes' | 'No';

  @IsDateString()
  @IsNotEmpty()
  dDate: string;
}