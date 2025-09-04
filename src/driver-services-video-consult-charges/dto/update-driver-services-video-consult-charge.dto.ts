import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverServicesVideoConsultChargeDto } from './create-driver-services-video-consult-charge.dto';

export class UpdateDriverServicesVideoConsultChargeDto extends PartialType(CreateDriverServicesVideoConsultChargeDto) {}
