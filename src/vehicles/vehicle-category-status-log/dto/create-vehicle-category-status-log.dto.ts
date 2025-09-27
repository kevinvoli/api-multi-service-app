import { IsInt, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateVehicleCategoryStatusLogDto {
  @IsInt()
  @IsNotEmpty()
  iVehicleCategoryId: number;

  @IsInt()
  @IsNotEmpty()
  iServiceId: number;

  @IsEnum(['Active', 'Inactive'])
  @IsNotEmpty()
  eStatus: 'Active' | 'Inactive';
}