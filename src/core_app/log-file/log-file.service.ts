import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogFile } from './entities/log-file.entity';
import { CreateLogFileDto } from './dto/create-log-file.dto';
import { UpdateLogFileDto } from './dto/update-log-file.dto';

@Injectable()
export class LogFileService {
  constructor(
    @InjectRepository(LogFile)
    private readonly repository: Repository<LogFile>,
  ) {}

  async create(createDto: CreateLogFileDto): Promise<LogFile> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<LogFile[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<LogFile> {
    const entity = await this.repository.findOneBy({ iLogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateLogFileDto): Promise<LogFile> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
