import { PartialType } from '@nestjs/mapped-types';
import { CreateOdaLocationsOrdersUnavailabilityDto } from './create-oda-locations-orders-unavailability.dto';

export class UpdateOdaLocationsOrdersUnavailabilityDto extends PartialType(CreateOdaLocationsOrdersUnavailabilityDto) {}
