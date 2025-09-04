import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDocDto } from './create-driver-doc.dto';

export class UpdateDriverDocDto extends PartialType(CreateDriverDocDto) {}
