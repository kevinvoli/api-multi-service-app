import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateHelpDto {
  @IsNumber()
  @IsNotEmpty()
  iHelpscategoryId: number;

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';

  @IsNumber()
  iDisplayOrder: number;

  @IsString()
  @IsNotEmpty()
  vTitle: string;

  @IsString()
  @IsNotEmpty()
  tDescription: string;
}