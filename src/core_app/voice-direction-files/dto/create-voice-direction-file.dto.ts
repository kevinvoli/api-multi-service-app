import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateVoiceDirectionFileDto {
  @IsNumber()
  @IsNotEmpty()
  iUserId: number;

  @IsString()
  @IsNotEmpty()
  vFile: string;

  @IsNumber()
  @IsNotEmpty()
  iOrderId: number;
}