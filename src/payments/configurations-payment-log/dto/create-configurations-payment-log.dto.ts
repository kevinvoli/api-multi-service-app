import { IsString, IsNotEmpty, IsInt, IsIP } from 'class-validator';

export class CreateConfigurationsPaymentLogDto {
  @IsInt()
  @IsNotEmpty()
  iUserId: number;

  @IsIP()
  @IsNotEmpty()
  vIp: string;

  @IsString()
  @IsNotEmpty()
  lPayConfigData: string;
}