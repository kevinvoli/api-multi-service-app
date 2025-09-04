import { PartialType } from '@nestjs/mapped-types';
import { CreateContentCubexDetailDto } from './create-content-cubex-detail.dto';

export class UpdateContentCubexDetailDto extends PartialType(CreateContentCubexDetailDto) {}
