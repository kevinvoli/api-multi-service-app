import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { UpdatePaymentTransactionDto } from './dto/update-payment-transaction.dto';
import { PaymentTransactions } from './entities/payment-transaction.entity';

@Injectable()
export class PaymentTransactionsService {
  constructor(
    @InjectRepository(PaymentTransactions)
    private readonly paymentTransactionRepository: Repository<PaymentTransactions>,
  ) {}

  async create(createPaymentTransactionDto: CreatePaymentTransactionDto): Promise<PaymentTransactions> {
    const paymentTransaction = this.paymentTransactionRepository.create(createPaymentTransactionDto);
    return this.paymentTransactionRepository.save(paymentTransaction);
  }

  async findAll(): Promise<PaymentTransactions[]> {
    return this.paymentTransactionRepository.find();
  }

  async findOne(id: number): Promise<PaymentTransactions> {
    const paymentTransaction = await this.paymentTransactionRepository.findOne({ where: { iTransactionId: id } });
    if (!paymentTransaction) {
      throw new NotFoundException(`PaymentTransaction with ID #${id} not found`);
    }
    return paymentTransaction;
  }

  async update(id: number, updatePaymentTransactionDto: UpdatePaymentTransactionDto): Promise<PaymentTransactions> {
    const paymentTransaction = await this.paymentTransactionRepository.preload({
      iTransactionId: id,
      ...updatePaymentTransactionDto,
    });
    if (!paymentTransaction) {
      throw new NotFoundException(`PaymentTransaction with ID #${id} not found`);
    }
    return this.paymentTransactionRepository.save(paymentTransaction);
  }

  async remove(id: number): Promise<void> {
    const result = await this.paymentTransactionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`PaymentTransaction with ID #${id} not found`);
    }
  }
}