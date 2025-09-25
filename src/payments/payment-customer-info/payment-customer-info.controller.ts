import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentCustomerInfoService } from './payment-customer-info.service';
import { CreatePaymentCustomerInfoDto } from './dto/create-payment-customer-info.dto';
import { UpdatePaymentCustomerInfoDto } from './dto/update-payment-customer-info.dto';

@Controller('payment-customer-info')
export class PaymentCustomerInfoController {
  constructor(private readonly paymentCustomerInfoService: PaymentCustomerInfoService) {}

  @Post()
  create(@Body() createPaymentCustomerInfoDto: CreatePaymentCustomerInfoDto) {
    return this.paymentCustomerInfoService.create(createPaymentCustomerInfoDto);
  }

  @Get()
  findAll() {
    return this.paymentCustomerInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentCustomerInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentCustomerInfoDto: UpdatePaymentCustomerInfoDto) {
    return this.paymentCustomerInfoService.update(+id, updatePaymentCustomerInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentCustomerInfoService.remove(+id);
  }
}
