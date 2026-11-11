import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class AddCartItemDto {
  @IsInt()
  iUserId: number;

  @IsInt()
  iCompanyId: number;

  @IsInt()
  iMenuItemId: number;

  @IsInt()
  iFoodMenuId: number;

  @IsOptional()
  @IsString()
  vOptionId?: string; // IDs séparés par virgule, ex: "12,15"

  @IsOptional()
  @IsString()
  vAddonId?: string; // IDs séparés par virgule, ex: "3,7"

  @IsInt()
  @Min(1)
  iQty: number;

  @IsOptional()
  @IsString()
  tInstruction?: string;

  @IsOptional()
  @IsString()
  eFoodType?: string;
}
