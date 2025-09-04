import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverLocationAirportDto } from './create-driver-location-airport.dto';

export class UpdateDriverLocationAirportDto extends PartialType(CreateDriverLocationAirportDto) {}
