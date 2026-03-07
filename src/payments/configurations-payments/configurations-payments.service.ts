import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigurationsPayment } from './entities/configurations-payment.entity';
import { CreateConfigurationsPaymentDto } from './dto/create-configurations-payment.dto';
import { UpdateConfigurationsPaymentDto } from './dto/update-configurations-payment.dto';

@Injectable()
export class ConfigurationsPaymentsService {
  constructor(
    @InjectRepository(ConfigurationsPayment)
    private readonly repository: Repository<ConfigurationsPayment>,
  ) {}

  async create(createDto: CreateConfigurationsPaymentDto): Promise<ConfigurationsPayment> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<ConfigurationsPayment[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<ConfigurationsPayment> {
    const entity = await this.repository.findOneBy({ iSettingId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateConfigurationsPaymentDto): Promise<ConfigurationsPayment> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
