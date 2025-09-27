import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PaymentRequestsService } from './payment-requests.service';
import { CreatePaymentRequestDto } from './dto/create-payment-request.dto';
import { UpdatePaymentRequestDto } from './dto/update-payment-request.dto';
import { PaymentRequests } from './entities/payment-request.entity';

@Controller('payment-requests')
export class PaymentRequestsController {
  constructor(private readonly paymentRequestsService: PaymentRequestsService) {}

  @Post()
  async create(@Body() createPaymentRequestDto: CreatePaymentRequestDto): Promise<PaymentRequests> {
    return this.paymentRequestsService.create(createPaymentRequestDto);
  }

  @Get()
  async findAll(): Promise<PaymentRequests[]> {
    return this.paymentRequestsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PaymentRequests> {
    return this.paymentRequestsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePaymentRequestDto: UpdatePaymentRequestDto): Promise<PaymentRequests> {
    return this.paymentRequestsService.update(id, updatePaymentRequestDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.paymentRequestsService.remove(id);
  }
}