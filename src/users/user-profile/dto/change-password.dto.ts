import { IsIn, IsInt, IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { Role } from '../../../auth/auth.types';

export class ChangePasswordDto {
  /** Absent pour userType 'admin' : le panneau envoie `userId`, que le service ne traite pas (il répond 400) */
  @ValidateIf((o: ChangePasswordDto) => o.userType !== 'admin')
  @IsInt()
  iUserId: number;

  @IsIn(['rider', 'driver', 'company', 'admin'])
  userType: Role | 'admin';

  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
