import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PaymentCustomerInfoService } from './payment-customer-info.service';
import { CreatePaymentCustomerInfoDto } from './dto/create-payment-customer-info.dto';
import { UpdatePaymentCustomerInfoDto } from './dto/update-payment-customer-info.dto';
import { PaymentCustomerInfo } from './entities/payment-customer-info.entity';

@Controller('payment-customer-info')
export class PaymentCustomerInfoController {
  constructor(private readonly paymentCustomerInfoService: PaymentCustomerInfoService) {}

  @Post()
  async create(@Body() createPaymentCustomerInfoDto: CreatePaymentCustomerInfoDto): Promise<PaymentCustomerInfo> {
    return this.paymentCustomerInfoService.create(createPaymentCustomerInfoDto);
  }

  @Get()
  async findAll(): Promise<PaymentCustomerInfo[]> {
    return this.paymentCustomerInfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PaymentCustomerInfo> {
    return this.paymentCustomerInfoService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePaymentCustomerInfoDto: UpdatePaymentCustomerInfoDto): Promise<PaymentCustomerInfo> {
    return this.paymentCustomerInfoService.update(id, updatePaymentCustomerInfoDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.paymentCustomerInfoService.remove(id);
  }
}