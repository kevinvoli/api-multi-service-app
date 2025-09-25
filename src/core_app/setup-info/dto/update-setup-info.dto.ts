import { PartialType } from '@nestjs/mapped-types';
import { CreateSetupInfoDto } from './create-setup-info.dto';

export class UpdateSetupInfoDto extends PartialType(CreateSetupInfoDto) {}
