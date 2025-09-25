import { Module } from '@nestjs/common';
import { NotificationSoundService } from './notification-sound.service';
import { NotificationSoundController } from './notification-sound.controller';

@Module({
  controllers: [NotificationSoundController],
  providers: [NotificationSoundService],
})
export class NotificationSoundModule {}
