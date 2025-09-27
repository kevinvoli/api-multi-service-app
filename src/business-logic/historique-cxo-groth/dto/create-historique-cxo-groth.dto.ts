import { IsInt, IsOptional } from 'class-validator';

export class CreateHistoriqueCxoGrothDto {
  @IsOptional()
  @IsInt()
  ios?: number;

  @IsOptional()
  @IsInt()
  android?: number;

  @IsOptional()
  @IsInt()
  t1?: number;

  @IsOptional()
  @IsInt()
  t2?: number;

  @IsOptional()
  @IsInt()
  t3?: number;

  @IsOptional()
  @IsInt()
  t4?: number;
}