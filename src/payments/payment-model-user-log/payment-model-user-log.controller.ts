import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PaymentModelUserLogService } from './payment-model-user-log.service';
import { CreatePaymentModelUserLogDto } from './dto/create-payment-model-user-log.dto';
import { UpdatePaymentModelUserLogDto } from './dto/update-payment-model-user-log.dto';
import { PaymentModeUserLog } from './entities/payment-model-user-log.entity';

@Controller('payment-model-user-log')
export class PaymentModelUserLogController {
  constructor(private readonly paymentModelUserLogService: PaymentModelUserLogService) {}

  @Post()
  async create(@Body() createPaymentModelUserLogDto: CreatePaymentModelUserLogDto): Promise<PaymentModeUserLog> {
    return this.paymentModelUserLogService.create(createPaymentModelUserLogDto);
  }

  @Get()
  async findAll(): Promise<PaymentModeUserLog[]> {
    return this.paymentModelUserLogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PaymentModeUserLog> {
    return this.paymentModelUserLogService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePaymentModelUserLogDto: UpdatePaymentModelUserLogDto): Promise<PaymentModeUserLog> {
    return this.paymentModelUserLogService.update(id, updatePaymentModelUserLogDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.paymentModelUserLogService.remove(id);
  }
}