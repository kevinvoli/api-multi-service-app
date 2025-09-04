import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentRequestsService } from './payment-requests.service';
import { CreatePaymentRequestDto } from './dto/create-payment-request.dto';
import { UpdatePaymentRequestDto } from './dto/update-payment-request.dto';

@Controller('payment-requests')
export class PaymentRequestsController {
  constructor(private readonly paymentRequestsService: PaymentRequestsService) {}

  @Post()
  create(@Body() createPaymentRequestDto: CreatePaymentRequestDto) {
    return this.paymentRequestsService.create(createPaymentRequestDto);
  }

  @Get()
  findAll() {
    return this.paymentRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentRequestDto: UpdatePaymentRequestDto) {
    return this.paymentRequestsService.update(+id, updatePaymentRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentRequestsService.remove(+id);
  }
}
