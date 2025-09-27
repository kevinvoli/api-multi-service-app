import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentModelUserLogDto } from './dto/create-payment-model-user-log.dto';
import { UpdatePaymentModelUserLogDto } from './dto/update-payment-model-user-log.dto';
import { PaymentModeUserLog } from './entities/payment-model-user-log.entity';

@Injectable()
export class PaymentModelUserLogService {
  constructor(
    @InjectRepository(PaymentModeUserLog)
    private readonly paymentModelUserLogRepository: Repository<PaymentModeUserLog>,
  ) {}

  async create(createPaymentModelUserLogDto: CreatePaymentModelUserLogDto): Promise<PaymentModeUserLog> {
    const paymentModelUserLog = this.paymentModelUserLogRepository.create(createPaymentModelUserLogDto);
    return this.paymentModelUserLogRepository.save(paymentModelUserLog);
  }

  async findAll(): Promise<PaymentModeUserLog[]> {
    return this.paymentModelUserLogRepository.find();
  }

  async findOne(id: number): Promise<PaymentModeUserLog> {
    const paymentModelUserLog = await this.paymentModelUserLogRepository.findOne({ where: { iLogId: id } });
    if (!paymentModelUserLog) {
      throw new NotFoundException(`PaymentModelUserLog with ID #${id} not found`);
    }
    return paymentModelUserLog;
  }

  async update(id: number, updatePaymentModelUserLogDto: UpdatePaymentModelUserLogDto): Promise<PaymentModeUserLog> {
    const paymentModelUserLog = await this.paymentModelUserLogRepository.preload({
      iLogId: id,
      ...updatePaymentModelUserLogDto,
    });
    if (!paymentModelUserLog) {
      throw new NotFoundException(`PaymentModelUserLog with ID #${id} not found`);
    }
    return this.paymentModelUserLogRepository.save(paymentModelUserLog);
  }

  async remove(id: number): Promise<void> {
    const result = await this.paymentModelUserLogRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`PaymentModelUserLog with ID #${id} not found`);
    }
  }
}