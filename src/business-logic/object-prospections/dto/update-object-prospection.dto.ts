import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectProspectionDto } from './create-object-prospection.dto';

export class UpdateObjectProspectionDto extends PartialType(CreateObjectProspectionDto) {}
