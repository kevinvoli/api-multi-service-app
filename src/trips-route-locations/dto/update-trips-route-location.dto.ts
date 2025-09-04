import { PartialType } from '@nestjs/mapped-types';
import { CreateTripsRouteLocationDto } from './create-trips-route-location.dto';

export class UpdateTripsRouteLocationDto extends PartialType(CreateTripsRouteLocationDto) {}
