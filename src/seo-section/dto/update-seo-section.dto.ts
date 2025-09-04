import { PartialType } from '@nestjs/mapped-types';
import { CreateSeoSectionDto } from './create-seo-section.dto';

export class UpdateSeoSectionDto extends PartialType(CreateSeoSectionDto) {}
