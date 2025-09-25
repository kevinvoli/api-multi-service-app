import { PartialType } from '@nestjs/mapped-types';
import { CreateLogFileDto } from './create-log-file.dto';

export class UpdateLogFileDto extends PartialType(CreateLogFileDto) {}
