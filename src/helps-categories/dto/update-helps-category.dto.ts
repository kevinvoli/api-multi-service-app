import { PartialType } from '@nestjs/mapped-types';
import { CreateHelpsCategoryDto } from './create-helps-category.dto';

export class UpdateHelpsCategoryDto extends PartialType(CreateHelpsCategoryDto) {}
