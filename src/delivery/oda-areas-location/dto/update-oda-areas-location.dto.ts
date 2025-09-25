import { PartialType } from '@nestjs/mapped-types';
import { CreateOdaAreasLocationDto } from './create-oda-areas-location.dto';

export class UpdateOdaAreasLocationDto extends PartialType(CreateOdaAreasLocationDto) {}
