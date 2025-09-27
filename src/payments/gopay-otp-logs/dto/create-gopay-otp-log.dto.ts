import { IsNotEmpty, IsEnum, IsInt, IsDateString } from 'class-validator';

export class CreateGopayOtpLogDto {
  @IsInt()
  @IsNotEmpty()
  iUserId: number;

  @IsEnum(['Driver', 'Rider'])
  @IsNotEmpty()
  eUserType: 'Driver' | 'Rider';

  @IsInt()
  @IsNotEmpty()
  fromUserId: number;

  @IsEnum(['Driver', 'Rider'])
  @IsNotEmpty()
  fromUserType: 'Driver' | 'Rider';

  @IsDateString()
  @IsNotEmpty()
  datetime: string;
}