import { PartialType } from '@nestjs/mapped-types';
import { CreateOdaSousItemsTypesLocationDto } from './create-oda-sous-items-types-location.dto';

export class UpdateOdaSousItemsTypesLocationDto extends PartialType(CreateOdaSousItemsTypesLocationDto) {}
