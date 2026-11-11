import { IsIn, IsOptional } from 'class-validator';
import { Role } from '../../../auth/auth.types';

export class GetProfileQueryDto {
  @IsOptional()
  @IsIn(['rider', 'driver', 'company'])
  userType?: Role;
}
