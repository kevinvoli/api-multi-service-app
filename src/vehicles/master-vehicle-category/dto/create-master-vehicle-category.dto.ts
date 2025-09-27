import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateMasterVehicleCategoryDto {
  @IsString()
  @IsNotEmpty()
  vCategoryName: string;

  @IsInt()
  @IsNotEmpty()
  iVehicleCategoryId: number;
}