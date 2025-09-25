import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguagePageDetailDto } from './create-language-page-detail.dto';

export class UpdateLanguagePageDetailDto extends PartialType(CreateLanguagePageDetailDto) {}
