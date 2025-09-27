import { IsInt, IsOptional, IsDateString } from 'class-validator';

export class CreateObjectRealisationDto {
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