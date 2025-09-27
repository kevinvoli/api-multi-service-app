import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PaymentTransactionsService } from './payment-transactions.service';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { UpdatePaymentTransactionDto } from './dto/update-payment-transaction.dto';
import { PaymentTransactions } from './entities/payment-transaction.entity';

@Controller('payment-transactions')
export class PaymentTransactionsController {
  constructor(private readonly paymentTransactionsService: PaymentTransactionsService) {}

  @Post()
  async create(@Body() createPaymentTransactionDto: CreatePaymentTransactionDto): Promise<PaymentTransactions> {
    return this.paymentTransactionsService.create(createPaymentTransactionDto);
  }

  @Get()
  async findAll(): Promise<PaymentTransactions[]> {
    return this.paymentTransactionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PaymentTransactions> {
    return this.paymentTransactionsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePaymentTransactionDto: UpdatePaymentTransactionDto): Promise<PaymentTransactions> {
    return this.paymentTransactionsService.update(id, updatePaymentTransactionDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.paymentTransactionsService.remove(id);
  }
}