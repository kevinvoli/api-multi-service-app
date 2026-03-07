import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PushnotificationLog } from './entities/pushnotification-log.entity';
import { CreatePushnotificationLogDto } from './dto/create-pushnotification-log.dto';
import { UpdatePushnotificationLogDto } from './dto/update-pushnotification-log.dto';

@Injectable()
export class PushnotificationLogService {
  constructor(
    @InjectRepository(PushnotificationLog)
    private readonly repository: Repository<PushnotificationLog>,
  ) {}

  async create(createDto: CreatePushnotificationLogDto): Promise<PushnotificationLog> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<PushnotificationLog[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<PushnotificationLog> {
    const entity = await this.repository.findOneBy({ iPushnotificationId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdatePushnotificationLogDto): Promise<PushnotificationLog> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
