import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminPermissionsDisplayGroupDto } from './create-admin-permissions-display-group.dto';

export class UpdateAdminPermissionsDisplayGroupDto extends PartialType(CreateAdminPermissionsDisplayGroupDto) {}
