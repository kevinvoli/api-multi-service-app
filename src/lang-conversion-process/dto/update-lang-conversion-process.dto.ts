import { PartialType } from '@nestjs/mapped-types';
import { CreateLangConversionProcessDto } from './create-lang-conversion-process.dto';

export class UpdateLangConversionProcessDto extends PartialType(CreateLangConversionProcessDto) {}
