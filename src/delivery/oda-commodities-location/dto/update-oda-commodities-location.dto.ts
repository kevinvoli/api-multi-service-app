import { PartialType } from '@nestjs/mapped-types';
import { CreateOdaCommoditiesLocationDto } from './create-oda-commodities-location.dto';

export class UpdateOdaCommoditiesLocationDto extends PartialType(CreateOdaCommoditiesLocationDto) {}
