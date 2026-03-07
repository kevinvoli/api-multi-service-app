import { Module } from '@nestjs/common';
import { NotificationSound } from './entities/notification-sound.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationSoundService } from './notification-sound.service';
import { NotificationSoundController } from './notification-sound.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationSound])],
  controllers: [NotificationSoundController],
  providers: [NotificationSoundService],
  exports: [TypeOrmModule.forFeature([NotificationSound])],
})
export class NotificationSoundModule {}
