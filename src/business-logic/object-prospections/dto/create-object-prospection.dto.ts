import { IsInt, IsOptional, IsDateString } from 'class-validator';

export class CreateObjectProspectionDto {
  @IsOptional()
  @IsInt()
  idService?: number;

  @IsOptional()
  @IsInt()
  idCategorie?: number;

  @IsOptional()
  @IsInt()
  quantite?: number;

  @IsOptional()
  @IsDateString()
  date?: string;
}