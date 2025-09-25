import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterVehicleCategoryDto } from './create-master-vehicle-category.dto';

export class UpdateMasterVehicleCategoryDto extends PartialType(CreateMasterVehicleCategoryDto) {}
