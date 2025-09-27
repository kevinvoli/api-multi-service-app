import {
  IsString,
  IsOptional,
  IsEnum,
  IsNotEmpty,
  IsEmail,
  IsIP,
} from 'class-validator';

export class CreateNewsLetterDto {
  @IsOptional()
  @IsEnum(['Subscribe', 'Unsubscribe'])
  eStatus?: 'Subscribe' | 'Unsubscribe';

  @IsString()
  @IsNotEmpty()
  vName: string;

  @IsEmail()
  @IsNotEmpty()
  vEmail: string;

  @IsOptional()
  @IsIP()
  vIp?: string;
}