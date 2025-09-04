import { PartialType } from '@nestjs/mapped-types';
import { CreateTripsLocationDto } from './create-trips-location.dto';

export class UpdateTripsLocationDto extends PartialType(CreateTripsLocationDto) {}
