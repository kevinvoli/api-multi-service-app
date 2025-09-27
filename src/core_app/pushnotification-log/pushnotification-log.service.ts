import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePushnotificationLogDto } from './dto/create-pushnotification-log.dto';
import { UpdatePushnotificationLogDto } from './dto/update-pushnotification-log.dto';
import { PushnotificationLog } from './entities/pushnotification-log.entity';

@Injectable()
export class PushnotificationLogService {
  constructor(
    @InjectRepository(PushnotificationLog)
    private readonly pushnotificationLogRepository: Repository<PushnotificationLog>,
  ) {}

  create(createPushnotificationLogDto: CreatePushnotificationLogDto): Promise<PushnotificationLog> {
    const pushnotificationLog = this.pushnotificationLogRepository.create(createPushnotificationLogDto);
    return this.pushnotificationLogRepository.save(pushnotificationLog);
  }

  findAll(): Promise<PushnotificationLog[]> {
    return this.pushnotificationLogRepository.find();
  }

  async findOne(id: number): Promise<PushnotificationLog> {
    const pushnotificationLog = await this.pushnotificationLogRepository.findOne({ where: { iPushnotificationId: id } });
    if (!pushnotificationLog) {
      throw new NotFoundException(`PushnotificationLog with ID #${id} not found`);
    }
    return pushnotificationLog;
  }

  async update(id: number, updatePushnotificationLogDto: UpdatePushnotificationLogDto): Promise<PushnotificationLog> {
    await this.findOne(id); // will throw error if not found
    await this.pushnotificationLogRepository.update(id, updatePushnotificationLogDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.pushnotificationLogRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`PushnotificationLog with ID #${id} not found`);
    }
  }
}