import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageLabel1Dto } from './create-language-label_1.dto';

export class UpdateLanguageLabel1Dto extends PartialType(CreateLanguageLabel1Dto) {}
