import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminAlertDto } from './create-admin-alert.dto';

export class UpdateAdminAlertDto extends PartialType(CreateAdminAlertDto) {}
