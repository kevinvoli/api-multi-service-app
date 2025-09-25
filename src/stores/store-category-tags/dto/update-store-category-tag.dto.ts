import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreCategoryTagDto } from './create-store-category-tag.dto';

export class UpdateStoreCategoryTagDto extends PartialType(CreateStoreCategoryTagDto) {}
