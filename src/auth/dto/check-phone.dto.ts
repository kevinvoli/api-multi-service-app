import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CheckPhoneDto {
  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsIn(['rider', 'driver'])
  userType: 'rider' | 'driver';
}
