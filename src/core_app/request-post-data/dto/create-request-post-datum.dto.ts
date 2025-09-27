import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRequestPostDatumDto {
  @IsString()
  @IsNotEmpty()
  tData: string;

  @IsString()
  @IsNotEmpty()
  tipaddress: string;
}