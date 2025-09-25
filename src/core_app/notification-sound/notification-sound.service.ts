import { Injectable } from '@nestjs/common';
import { CreateNotificationSoundDto } from './dto/create-notification-sound.dto';
import { UpdateNotificationSoundDto } from './dto/update-notification-sound.dto';

@Injectable()
export class NotificationSoundService {
  create(createNotificationSoundDto: CreateNotificationSoundDto) {
    return 'This action adds a new notificationSound';
  }

  findAll() {
    return `This action returns all notificationSound`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificationSound`;
  }

  update(id: number, updateNotificationSoundDto: UpdateNotificationSoundDto) {
    return `This action updates a #${id} notificationSound`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificationSound`;
  }
}
