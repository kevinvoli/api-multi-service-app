import { PartialType } from '@nestjs/mapped-types';
import { CreateTripDeliveryFieldDto } from './create-trip-delivery-field.dto';

export class UpdateTripDeliveryFieldDto extends PartialType(CreateTripDeliveryFieldDto) {}
