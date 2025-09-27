import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConfigurationsPaymentLogDto } from './dto/create-configurations-payment-log.dto';
import { UpdateConfigurationsPaymentLogDto } from './dto/update-configurations-payment-log.dto';
import { ConfigurationsPaymentLog } from './entities/configurations-payment-log.entity';

@Injectable()
export class ConfigurationsPaymentLogService {
  constructor(
    @InjectRepository(ConfigurationsPaymentLog)
    private readonly configurationsPaymentLogRepository: Repository<ConfigurationsPaymentLog>,
  ) {}

  async create(createConfigurationsPaymentLogDto: CreateConfigurationsPaymentLogDto): Promise<ConfigurationsPaymentLog> {
    const configurationsPaymentLog = this.configurationsPaymentLogRepository.create(createConfigurationsPaymentLogDto);
    return this.configurationsPaymentLogRepository.save(configurationsPaymentLog);
  }

  async findAll(): Promise<ConfigurationsPaymentLog[]> {
    return this.configurationsPaymentLogRepository.find();
  }

  async findOne(id: number): Promise<ConfigurationsPaymentLog> {
    const configurationsPaymentLog = await this.configurationsPaymentLogRepository.findOne({ where: { iLogId: id } });
    if (!configurationsPaymentLog) {
      throw new NotFoundException(`ConfigurationsPaymentLog with ID #${id} not found`);
    }
    return configurationsPaymentLog;
  }

  async update(id: number, updateConfigurationsPaymentLogDto: UpdateConfigurationsPaymentLogDto): Promise<ConfigurationsPaymentLog> {
    const configurationsPaymentLog = await this.configurationsPaymentLogRepository.preload({
      iLogId: id,
      ...updateConfigurationsPaymentLogDto,
    });
    if (!configurationsPaymentLog) {
      throw new NotFoundException(`ConfigurationsPaymentLog with ID #${id} not found`);
    }
    return this.configurationsPaymentLogRepository.save(configurationsPaymentLog);
  }

  async remove(id: number): Promise<void> {
    const result = await this.configurationsPaymentLogRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ConfigurationsPaymentLog with ID #${id} not found`);
    }
  }
}