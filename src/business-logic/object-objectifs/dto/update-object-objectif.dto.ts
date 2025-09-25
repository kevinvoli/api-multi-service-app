import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectObjectifDto } from './create-object-objectif.dto';

export class UpdateObjectObjectifDto extends PartialType(CreateObjectObjectifDto) {}
