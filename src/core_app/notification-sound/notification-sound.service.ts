import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationSound } from './entities/notification-sound.entity';
import { CreateNotificationSoundDto } from './dto/create-notification-sound.dto';
import { UpdateNotificationSoundDto } from './dto/update-notification-sound.dto';

@Injectable()
export class NotificationSoundService {
  constructor(
    @InjectRepository(NotificationSound)
    private readonly repository: Repository<NotificationSound>,
  ) {}

  async create(createDto: CreateNotificationSoundDto): Promise<NotificationSound> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<NotificationSound[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<NotificationSound> {
    const entity = await this.repository.findOneBy({ iSoundId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateNotificationSoundDto): Promise<NotificationSound> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
