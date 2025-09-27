import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ConfigurationsPaymentsService } from './configurations-payments.service';
import { CreateConfigurationsPaymentDto } from './dto/create-configurations-payment.dto';
import { UpdateConfigurationsPaymentDto } from './dto/update-configurations-payment.dto';
import { ConfigurationsPayment } from './entities/configurations-payment.entity';

@Controller('configurations-payments')
export class ConfigurationsPaymentsController {
  constructor(private readonly configurationsPaymentsService: ConfigurationsPaymentsService) {}

  @Post()
  async create(@Body() createConfigurationsPaymentDto: CreateConfigurationsPaymentDto): Promise<ConfigurationsPayment> {
    return this.configurationsPaymentsService.create(createConfigurationsPaymentDto);
  }

  @Get()
  async findAll(): Promise<ConfigurationsPayment[]> {
    return this.configurationsPaymentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ConfigurationsPayment> {
    return this.configurationsPaymentsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateConfigurationsPaymentDto: UpdateConfigurationsPaymentDto): Promise<ConfigurationsPayment> {
    return this.configurationsPaymentsService.update(id, updateConfigurationsPaymentDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.configurationsPaymentsService.remove(id);
  }
}