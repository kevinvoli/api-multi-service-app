import { IsString, Matches } from 'class-validator';

export class SendOtpDto {
  @IsString()
  @Matches(/^\+?[0-9]{6,20}$/, { message: 'phone invalide' })
  phone: string;
}

export class VerifyOtpDto extends SendOtpDto {
  @IsString()
  @Matches(/^\d{6}$/, { message: 'code invalide' })
  code: string;
}
