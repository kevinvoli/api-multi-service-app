import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageMasterDto } from './create-language-master.dto';

export class UpdateLanguageMasterDto extends PartialType(CreateLanguageMasterDto) {}
