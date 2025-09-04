import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryPreferenceDto } from './create-delivery-preference.dto';

export class UpdateDeliveryPreferenceDto extends PartialType(CreateDeliveryPreferenceDto) {}
