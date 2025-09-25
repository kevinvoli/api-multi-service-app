import { PartialType } from '@nestjs/mapped-types';
import { CreateAirportLocationMasterDto } from './create-airport-location-master.dto';

export class UpdateAirportLocationMasterDto extends PartialType(CreateAirportLocationMasterDto) {}
