import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ConfigurationsPaymentLogService } from './configurations-payment-log.service';
import { CreateConfigurationsPaymentLogDto } from './dto/create-configurations-payment-log.dto';
import { UpdateConfigurationsPaymentLogDto } from './dto/update-configurations-payment-log.dto';
import { ConfigurationsPaymentLog } from './entities/configurations-payment-log.entity';

@Controller('configurations-payment-log')
export class ConfigurationsPaymentLogController {
  constructor(private readonly configurationsPaymentLogService: ConfigurationsPaymentLogService) {}

  @Post()
  async create(@Body() createConfigurationsPaymentLogDto: CreateConfigurationsPaymentLogDto): Promise<ConfigurationsPaymentLog> {
    return this.configurationsPaymentLogService.create(createConfigurationsPaymentLogDto);
  }

  @Get()
  async findAll(): Promise<ConfigurationsPaymentLog[]> {
    return this.configurationsPaymentLogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ConfigurationsPaymentLog> {
    return this.configurationsPaymentLogService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateConfigurationsPaymentLogDto: UpdateConfigurationsPaymentLogDto): Promise<ConfigurationsPaymentLog> {
    return this.configurationsPaymentLogService.update(id, updateConfigurationsPaymentLogDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.configurationsPaymentLogService.remove(id);
  }
}