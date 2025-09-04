import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageLabelOtherDto } from './create-language-label-other.dto';

export class UpdateLanguageLabelOtherDto extends PartialType(CreateLanguageLabelOtherDto) {}
