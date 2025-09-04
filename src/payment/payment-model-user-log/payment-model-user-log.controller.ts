import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentModelUserLogService } from './payment-model-user-log.service';
import { CreatePaymentModelUserLogDto } from './dto/create-payment-model-user-log.dto';
import { UpdatePaymentModelUserLogDto } from './dto/update-payment-model-user-log.dto';

@Controller('payment-model-user-log')
export class PaymentModelUserLogController {
  constructor(private readonly paymentModelUserLogService: PaymentModelUserLogService) {}

  @Post()
  create(@Body() createPaymentModelUserLogDto: CreatePaymentModelUserLogDto) {
    return this.paymentModelUserLogService.create(createPaymentModelUserLogDto);
  }

  @Get()
  findAll() {
    return this.paymentModelUserLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentModelUserLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentModelUserLogDto: UpdatePaymentModelUserLogDto) {
    return this.paymentModelUserLogService.update(+id, updatePaymentModelUserLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentModelUserLogService.remove(+id);
  }
}
