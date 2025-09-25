import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleCategoryStatusLogDto } from './create-vehicle-category-status-log.dto';

export class UpdateVehicleCategoryStatusLogDto extends PartialType(CreateVehicleCategoryStatusLogDto) {}
