import { PartialType } from '@nestjs/mapped-types';
import { CreateIntentionsCritereDto } from './create-intentions-critere.dto';

export class UpdateIntentionsCritereDto extends PartialType(CreateIntentionsCritereDto) {}
