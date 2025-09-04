import { PartialType } from '@nestjs/mapped-types';
import { CreateVoiceDirectionFileDto } from './create-voice-direction-file.dto';

export class UpdateVoiceDirectionFileDto extends PartialType(CreateVoiceDirectionFileDto) {}
