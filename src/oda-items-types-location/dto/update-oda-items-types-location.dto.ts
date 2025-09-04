import { PartialType } from '@nestjs/mapped-types';
import { CreateOdaItemsTypesLocationDto } from './create-oda-items-types-location.dto';

export class UpdateOdaItemsTypesLocationDto extends PartialType(CreateOdaItemsTypesLocationDto) {}
