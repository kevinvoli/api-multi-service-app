import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLogFileDto } from './dto/create-log-file.dto';
import { UpdateLogFileDto } from './dto/update-log-file.dto';
import { LogFile } from './entities/log-file.entity';

@Injectable()
export class LogFileService {
  constructor(
    @InjectRepository(LogFile)
    private readonly logFileRepository: Repository<LogFile>,
  ) {}

  create(createLogFileDto: CreateLogFileDto): Promise<LogFile> {
    const logFile = this.logFileRepository.create(createLogFileDto);
    return this.logFileRepository.save(logFile);
  }

  findAll(): Promise<LogFile[]> {
    return this.logFileRepository.find();
  }

  async findOne(id: number): Promise<LogFile> {
    const logFile = await this.logFileRepository.findOne({ where: { iLogId: id } });
    if (!logFile) {
      throw new NotFoundException(`LogFile with ID #${id} not found`);
    }
    return logFile;
  }

  async update(id: number, updateLogFileDto: UpdateLogFileDto): Promise<LogFile> {
    await this.findOne(id); // will throw error if not found
    await this.logFileRepository.update(id, updateLogFileDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.logFileRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`LogFile with ID #${id} not found`);
    }
  }
}