import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNotEmpty,
  IsEmail,
} from 'class-validator';

export class CreateContactusDto {
  @IsNumber()
  @IsNotEmpty()
  iMemberId: number;

  @IsString()
  @IsNotEmpty()
  vFirstname: string;

  @IsString()
  @IsNotEmpty()
  vLastname: string;

  @IsOptional()
  @IsEnum(['Passenger', 'Driver', 'Company', 'Guest'])
  eUserType?: 'Passenger' | 'Driver' | 'Company' | 'Guest';

  @IsEnum(['General', 'DeliverAll'])
  eSystem: 'General' | 'DeliverAll';

  @IsEmail()
  @IsNotEmpty()
  vEmail: string;

  @IsString()
  @IsNotEmpty()
  vPhone: string;

  @IsString()
  @IsNotEmpty()
  vSubject: string;

  @IsString()
  @IsNotEmpty()
  tDescription: string;
}