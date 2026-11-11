import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserType } from '../auth.types';

export class LoginDto {
  /** email ou numéro de téléphone */
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsIn(['rider', 'driver', 'company', 'hotel'])
  userType: UserType;

  @IsOptional()
  @IsString()
  countryCode?: string;

  /** pour company : eSystem (Ride, DeliverAll, etc.) */
  @IsOptional()
  @IsString()
  compSystem?: string;
}
