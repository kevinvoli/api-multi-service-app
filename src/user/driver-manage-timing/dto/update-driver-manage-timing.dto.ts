import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverManageTimingDto } from './create-driver-manage-timing.dto';

export class UpdateDriverManageTimingDto extends PartialType(CreateDriverManageTimingDto) {}
