import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentModeUserLog } from './entities/payment-model-user-log.entity';
import { CreatePaymentModelUserLogDto } from './dto/create-payment-model-user-log.dto';
import { UpdatePaymentModelUserLogDto } from './dto/update-payment-model-user-log.dto';

@Injectable()
export class PaymentModelUserLogService {
  constructor(
    @InjectRepository(PaymentModeUserLog)
    private readonly repository: Repository<PaymentModeUserLog>,
  ) {}

  async create(createDto: CreatePaymentModelUserLogDto): Promise<PaymentModeUserLog> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<PaymentModeUserLog[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<PaymentModeUserLog> {
    const entity = await this.repository.findOneBy({ iLogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdatePaymentModelUserLogDto): Promise<PaymentModeUserLog> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
