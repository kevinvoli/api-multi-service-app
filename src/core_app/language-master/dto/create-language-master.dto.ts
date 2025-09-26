import { IsString, IsNumber, IsEnum, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateLanguageMasterDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  vTitle: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  vTitleEn: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  vCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  vGMapLangCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  vLangCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  vCurrencyCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  vCurrencySymbol: string;

  @IsNumber()
  @IsNotEmpty()
  iDispOrder: number;

  @IsEnum(['Active', 'Inactive'])
  @IsNotEmpty()
  eStatus: 'Active' | 'Inactive';

  @IsEnum(['Yes', 'No'])
  @IsNotEmpty()
  eDefault: 'Yes' | 'No';

  @IsEnum(['rtl', 'ltr'])
  @IsNotEmpty()
  eDirectionCode: 'rtl' | 'ltr';
}