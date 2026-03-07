import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentTransaction } from './entities/payment-transaction.entity';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { UpdatePaymentTransactionDto } from './dto/update-payment-transaction.dto';

@Injectable()
export class PaymentTransactionsService {
  constructor(
    @InjectRepository(PaymentTransaction)
    private readonly repository: Repository<PaymentTransaction>,
  ) {}

  async create(createDto: CreatePaymentTransactionDto): Promise<PaymentTransaction> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<PaymentTransaction[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<PaymentTransaction> {
    const entity = await this.repository.findOneBy({ iTransactionId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdatePaymentTransactionDto): Promise<PaymentTransaction> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
