import { IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../../../auth/auth.types';

export class VerifyPasswordDto {
  @IsInt()
  iUserId: number;

  @IsIn(['rider', 'driver', 'company'])
  userType: Role;

  @IsString()
  @IsNotEmpty()
  password: string;
}
