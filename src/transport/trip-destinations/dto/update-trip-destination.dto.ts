import { PartialType } from '@nestjs/mapped-types';
import { CreateTripDestinationDto } from './create-trip-destination.dto';

export class UpdateTripDestinationDto extends PartialType(CreateTripDestinationDto) {}
