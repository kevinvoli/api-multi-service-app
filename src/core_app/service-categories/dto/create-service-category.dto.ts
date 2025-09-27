import { IsString, IsEnum, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateServiceCategoryDto {
  @IsString()
  @IsNotEmpty()
  vService: string;

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eShowTerms: 'Yes' | 'No';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  eProofUpload: 'Yes' | 'No';

  @IsString()
  @IsNotEmpty()
  vServiceNameEn: string;

  @IsString()
  @IsNotEmpty()
  vServiceNameFr: string;

  @IsNumber()
  @IsNotEmpty()
  iDisplayOrder: number;

  @IsString()
  @IsNotEmpty()
  vImage: string;

  @IsEnum(['Active', 'Inactive'])
  @IsOptional()
  eStatus: 'Active' | 'Inactive';

  @IsEnum(['separate', 'combine'])
  @IsOptional()
  eType: 'separate' | 'combine';

  @IsEnum(['Yes', 'No'])
  @IsOptional()
  prescriptionRequired: 'Yes' | 'No';

  @IsString()
  @IsNotEmpty()
  tDescription: string;

  @IsString()
  @IsOptional()
  tProofNote: string;

  @IsString()
  @IsOptional()
  tProofNoteDriver: string;

  @IsString()
  @IsOptional()
  tProofNoteStore: string;

  @IsEnum(['No', 'Yes'])
  @IsOptional()
  eOtpCodeEnable: 'No' | 'Yes';
}