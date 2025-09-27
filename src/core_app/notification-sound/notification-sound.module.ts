import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationSoundService } from './notification-sound.service';
import { NotificationSoundController } from './notification-sound.controller';
import { NotificationSound } from './entities/notification-sound.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationSound])],
  controllers: [NotificationSoundController],
  providers: [NotificationSoundService],
})
export class NotificationSoundModule {}
