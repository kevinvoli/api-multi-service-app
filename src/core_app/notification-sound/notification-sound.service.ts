import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificationSoundDto } from './dto/create-notification-sound.dto';
import { UpdateNotificationSoundDto } from './dto/update-notification-sound.dto';
import { NotificationSound } from './entities/notification-sound.entity';

@Injectable()
export class NotificationSoundService {
  constructor(
    @InjectRepository(NotificationSound)
    private readonly notificationSoundRepository: Repository<NotificationSound>,
  ) {}

  create(createNotificationSoundDto: CreateNotificationSoundDto): Promise<NotificationSound> {
    const notificationSound = this.notificationSoundRepository.create(createNotificationSoundDto);
    return this.notificationSoundRepository.save(notificationSound);
  }

  findAll(): Promise<NotificationSound[]> {
    return this.notificationSoundRepository.find();
  }

  async findOne(id: number): Promise<NotificationSound> {
    const notificationSound = await this.notificationSoundRepository.findOne({ where: { iSoundId: id } });
    if (!notificationSound) {
      throw new NotFoundException(`NotificationSound with ID #${id} not found`);
    }
    return notificationSound;
  }

  async update(id: number, updateNotificationSoundDto: UpdateNotificationSoundDto): Promise<NotificationSound> {
    await this.findOne(id); // will throw error if not found
    await this.notificationSoundRepository.update(id, updateNotificationSoundDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.notificationSoundRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`NotificationSound with ID #${id} not found`);
    }
  }
}