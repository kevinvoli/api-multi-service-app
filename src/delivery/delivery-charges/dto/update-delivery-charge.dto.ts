import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryChargeDto } from './create-delivery-charge.dto';

export class UpdateDeliveryChargeDto extends PartialType(CreateDeliveryChargeDto) {}
