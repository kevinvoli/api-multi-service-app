import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuItemOptionsCategoryDto } from './create-menu-item-options-category.dto';

export class UpdateMenuItemOptionsCategoryDto extends PartialType(CreateMenuItemOptionsCategoryDto) {}
