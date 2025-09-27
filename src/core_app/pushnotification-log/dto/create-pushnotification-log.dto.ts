import { IsString, IsNumber, IsEnum, IsNotEmpty, MaxLength, IsDate } from 'class-validator';

export class CreatePushnotificationLogDto {
  @IsEnum(['driver', 'rider', 'company'])
  @IsNotEmpty()
  eUserType: 'driver' | 'rider' | 'company';

  @IsNumber()
  @IsNotEmpty()
  iUserId: number;

  @IsString()
  @IsNotEmpty()
  tMessage: string;

  @IsDate()
  @IsNotEmpty()
  dDateTime: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(225)
  ipAddress: string;
}