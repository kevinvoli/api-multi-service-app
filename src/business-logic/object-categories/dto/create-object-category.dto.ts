import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateObjectCategoryDto {
  @IsOptional()
  @IsInt()
  idService?: number;

  @IsOptional()
  @IsString()
  libelleFr?: string;
}