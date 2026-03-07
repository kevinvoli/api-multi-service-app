import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigurationsPaymentLog } from './entities/configurations-payment-log.entity';
import { CreateConfigurationsPaymentLogDto } from './dto/create-configurations-payment-log.dto';
import { UpdateConfigurationsPaymentLogDto } from './dto/update-configurations-payment-log.dto';

@Injectable()
export class ConfigurationsPaymentLogService {
  constructor(
    @InjectRepository(ConfigurationsPaymentLog)
    private readonly repository: Repository<ConfigurationsPaymentLog>,
  ) {}

  async create(createDto: CreateConfigurationsPaymentLogDto): Promise<ConfigurationsPaymentLog> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<ConfigurationsPaymentLog[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<ConfigurationsPaymentLog> {
    const entity = await this.repository.findOneBy({ iLogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateConfigurationsPaymentLogDto): Promise<ConfigurationsPaymentLog> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
