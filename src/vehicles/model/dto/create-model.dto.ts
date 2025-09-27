import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateModelDto {
  @IsString()
  @IsNotEmpty()
  vTitle: string;

  @IsInt()
  @IsNotEmpty()
  iMakeId: number;
}