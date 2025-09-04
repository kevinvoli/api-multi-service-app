import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectRealisationDto } from './create-object-realisation.dto';

export class UpdateObjectRealisationDto extends PartialType(CreateObjectRealisationDto) {}
