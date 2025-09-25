import { PartialType } from '@nestjs/mapped-types';
import { CreateHelpDetailCategoryDto } from './create-help-detail-category.dto';

export class UpdateHelpDetailCategoryDto extends PartialType(CreateHelpDetailCategoryDto) {}
