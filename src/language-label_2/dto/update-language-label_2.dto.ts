import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageLabel2Dto } from './create-language-label_2.dto';

export class UpdateLanguageLabel2Dto extends PartialType(CreateLanguageLabel2Dto) {}
