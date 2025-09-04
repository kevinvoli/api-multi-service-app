import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsLetterDto } from './create-news-letter.dto';

export class UpdateNewsLetterDto extends PartialType(CreateNewsLetterDto) {}
