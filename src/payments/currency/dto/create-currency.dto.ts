import { IsString, IsNotEmpty, IsInt, IsEnum, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class CreateCurrencyDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  vName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  vSymbol: string;

  @IsInt()
  @IsNotEmpty()
  iDispOrder: number;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eDefault: 'Yes' | 'No';

  @IsNumber()
  @IsNotEmpty()
  ratio: number;

  @IsNumber()
  @IsOptional()
  fThresholdAmount: number;

  @IsEnum(['Active', 'Inactive'])
  @IsOptional()
  eStatus: 'Active' | 'Inactive';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eReverseformattingEnable: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eReverseSymbolEnable: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eRoundingOffEnable: 'Yes' | 'No';

  @IsNumber()
  @IsOptional()
  fFirstRangeValue: number;

  @IsNumber()
  @IsOptional()
  fMiddleRangeValue: number;

  @IsNumber()
  @IsOptional()
  fSecRangeValue: number;
}