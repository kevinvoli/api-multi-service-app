import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateIntentionsCritereDto {
  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsString()
  stamp?: string;

  @IsInt()
  intentionId: number;

  @IsInt()
  sousService: number;

  @IsOptional()
  @IsString()
  communeId?: string;

  @IsOptional()
  @IsString()
  area?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  sousType?: string;

  @IsOptional()
  @IsInt()
  prixMin?: number;

  @IsOptional()
  @IsInt()
  prixMax?: number;

  @IsOptional()
  @IsInt()
  minSurface?: number;

  @IsOptional()
  @IsInt()
  maxSurface?: number;

  @IsOptional()
  @IsDateString()
  dateDebut?: Date;

  @IsOptional()
  @IsDateString()
  dateFin?: Date;

  @IsOptional()
  @IsInt()
  resultats?: number;
}