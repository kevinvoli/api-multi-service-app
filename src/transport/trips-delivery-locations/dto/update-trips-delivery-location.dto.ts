import { PartialType } from '@nestjs/mapped-types';
import { CreateTripsDeliveryLocationDto } from './create-trips-delivery-location.dto';

export class UpdateTripsDeliveryLocationDto extends PartialType(CreateTripsDeliveryLocationDto) {}
