import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationMasterDto } from './create-location-master.dto';

export class UpdateLocationMasterDto extends PartialType(CreateLocationMasterDto) {}
