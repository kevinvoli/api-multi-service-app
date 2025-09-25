import { PartialType } from '@nestjs/mapped-types';
import { CreateEmergencyCantactDatumDto } from './create-emergency-cantact-datum.dto';

export class UpdateEmergencyCantactDatumDto extends PartialType(CreateEmergencyCantactDatumDto) {}
