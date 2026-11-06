import { IsDateString, IsInt, IsOptional } from 'class-validator';

export class CreateObjectProspectionDto {
  @IsInt()
  @IsOptional()
  idService?: number;

  @IsInt()
  @IsOptional()
  idCategorie?: number;

  @IsInt()
  @IsOptional()
  quantite?: number;

  @IsDateString()
  @IsOptional()
  date?: string;
}
