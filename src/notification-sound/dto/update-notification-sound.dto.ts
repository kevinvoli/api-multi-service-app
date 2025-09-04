import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificationSoundDto } from './create-notification-sound.dto';

export class UpdateNotificationSoundDto extends PartialType(CreateNotificationSoundDto) {}
