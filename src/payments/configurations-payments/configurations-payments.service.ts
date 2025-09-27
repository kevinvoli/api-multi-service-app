import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConfigurationsPaymentDto } from './dto/create-configurations-payment.dto';
import { UpdateConfigurationsPaymentDto } from './dto/update-configurations-payment.dto';
import { ConfigurationsPayment } from './entities/configurations-payment.entity';

@Injectable()
export class ConfigurationsPaymentsService {
  constructor(
    @InjectRepository(ConfigurationsPayment)
    private readonly configurationsPaymentRepository: Repository<ConfigurationsPayment>,
  ) {}

  async create(createConfigurationsPaymentDto: CreateConfigurationsPaymentDto): Promise<ConfigurationsPayment> {
    const configurationsPayment = this.configurationsPaymentRepository.create(createConfigurationsPaymentDto);
    return this.configurationsPaymentRepository.save(configurationsPayment);
  }

  async findAll(): Promise<ConfigurationsPayment[]> {
    return this.configurationsPaymentRepository.find();
  }

  async findOne(id: number): Promise<ConfigurationsPayment> {
    const configurationsPayment = await this.configurationsPaymentRepository.findOne({ where: { iSettingId: id } });
    if (!configurationsPayment) {
      throw new NotFoundException(`ConfigurationsPayment with ID #${id} not found`);
    }
    return configurationsPayment;
  }

  async update(id: number, updateConfigurationsPaymentDto: UpdateConfigurationsPaymentDto): Promise<ConfigurationsPayment> {
    const configurationsPayment = await this.configurationsPaymentRepository.preload({
      iSettingId: id,
      ...updateConfigurationsPaymentDto,
    });
    if (!configurationsPayment) {
      throw new NotFoundException(`ConfigurationsPayment with ID #${id} not found`);
    }
    return this.configurationsPaymentRepository.save(configurationsPayment);
  }

  async remove(id: number): Promise<void> {
    const result = await this.configurationsPaymentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ConfigurationsPayment with ID #${id} not found`);
    }
  }
}