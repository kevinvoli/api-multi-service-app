import { PartialType } from '@nestjs/mapped-types';
import { CreateRelatedCommuneDto } from './create-related-commune.dto';

export class UpdateRelatedCommuneDto extends PartialType(CreateRelatedCommuneDto) {}
