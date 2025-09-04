import { PartialType } from '@nestjs/mapped-types';
import { CreateTripsStopoverpointLocationDto } from './create-trips-stopoverpoint-location.dto';

export class UpdateTripsStopoverpointLocationDto extends PartialType(CreateTripsStopoverpointLocationDto) {}
