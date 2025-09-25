import { PartialType } from '@nestjs/mapped-types';
import { CreateHelpDetailDto } from './create-help-detail.dto';

export class UpdateHelpDetailDto extends PartialType(CreateHelpDetailDto) {}
