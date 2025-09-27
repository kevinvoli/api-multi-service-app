import {
  IsString,
  IsOptional,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

export class CreateHomeScreenDto {
  @IsString()
  @IsNotEmpty()
  vImageTitle: string;

  @IsString()
  @IsNotEmpty()
  vImageName: string;

  @IsString()
  @IsNotEmpty()
  iDescOrd: string;

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  eStatus?: 'Active' | 'Inactive';
}