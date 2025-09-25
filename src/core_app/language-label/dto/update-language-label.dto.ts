import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageLabelDto } from './create-language-label.dto';

export class UpdateLanguageLabelDto extends PartialType(CreateLanguageLabelDto) {}
