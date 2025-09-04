import { PartialType } from '@nestjs/mapped-types';
import { CreateOdaLocationsStatusDto } from './create-oda-locations-status.dto';

export class UpdateOdaLocationsStatusDto extends PartialType(CreateOdaLocationsStatusDto) {}
