import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterServiceCategoryDto } from './create-master-service-category.dto';

export class UpdateMasterServiceCategoryDto extends PartialType(CreateMasterServiceCategoryDto) {}
