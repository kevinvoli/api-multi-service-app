import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMakeDto {
  @IsString()
  @IsNotEmpty()
  vMake: string;
}