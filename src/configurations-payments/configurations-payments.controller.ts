import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigurationsPaymentsService } from './configurations-payments.service';
import { CreateConfigurationsPaymentDto } from './dto/create-configurations-payment.dto';
import { UpdateConfigurationsPaymentDto } from './dto/update-configurations-payment.dto';

@Controller('configurations-payments')
export class ConfigurationsPaymentsController {
  constructor(private readonly configurationsPaymentsService: ConfigurationsPaymentsService) {}

  @Post()
  create(@Body() createConfigurationsPaymentDto: CreateConfigurationsPaymentDto) {
    return this.configurationsPaymentsService.create(createConfigurationsPaymentDto);
  }

  @Get()
  findAll() {
    return this.configurationsPaymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configurationsPaymentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfigurationsPaymentDto: UpdateConfigurationsPaymentDto) {
    return this.configurationsPaymentsService.update(+id, updateConfigurationsPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configurationsPaymentsService.remove(+id);
  }
}
