import { IsEmail, IsIn, IsInt, IsOptional, IsString } from 'class-validator';
import { Role } from '../../../auth/auth.types';

export class UpdateProfileDto {
  /** ID de l'utilisateur concerné */
  @IsInt()
  iUserId: number;

  /** Type : 'rider' | 'driver' | 'company' */
  @IsIn(['rider', 'driver', 'company'])
  userType: Role;

  @IsOptional()
  @IsString()
  vName?: string;

  @IsOptional()
  @IsString()
  vLastName?: string;

  @IsOptional()
  @IsEmail()
  vEmail?: string;

  @IsOptional()
  @IsString()
  vPhone?: string;

  @IsOptional()
  @IsString()
  vPhoneCode?: string;

  @IsOptional()
  @IsString()
  vCountry?: string;

  @IsOptional()
  @IsString()
  vLang?: string;

  @IsOptional()
  @IsString()
  vCurrencyPassenger?: string;

  /** Mot de passe actuel (requis si changement de mot de passe) */
  @IsOptional()
  @IsString()
  currentPassword?: string;

  /** Nouveau mot de passe */
  @IsOptional()
  @IsString()
  newPassword?: string;
}
