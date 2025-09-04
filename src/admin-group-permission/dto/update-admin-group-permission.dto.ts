import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminGroupPermissionDto } from './create-admin-group-permission.dto';

export class UpdateAdminGroupPermissionDto extends PartialType(CreateAdminGroupPermissionDto) {}
