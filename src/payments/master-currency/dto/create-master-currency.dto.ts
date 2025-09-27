import { IsString, IsNotEmpty, IsEnum, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class CreateMasterCurrencyDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  vName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  vSymbol: string;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eDefault: 'Yes' | 'No';

  @IsNumber()
  @IsNotEmpty()
  ratio: number;
}