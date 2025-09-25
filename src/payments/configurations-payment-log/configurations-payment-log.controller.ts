import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigurationsPaymentLogService } from './configurations-payment-log.service';
import { CreateConfigurationsPaymentLogDto } from './dto/create-configurations-payment-log.dto';
import { UpdateConfigurationsPaymentLogDto } from './dto/update-configurations-payment-log.dto';

@Controller('configurations-payment-log')
export class ConfigurationsPaymentLogController {
  constructor(private readonly configurationsPaymentLogService: ConfigurationsPaymentLogService) {}

  @Post()
  create(@Body() createConfigurationsPaymentLogDto: CreateConfigurationsPaymentLogDto) {
    return this.configurationsPaymentLogService.create(createConfigurationsPaymentLogDto);
  }

  @Get()
  findAll() {
    return this.configurationsPaymentLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configurationsPaymentLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfigurationsPaymentLogDto: UpdateConfigurationsPaymentLogDto) {
    return this.configurationsPaymentLogService.update(+id, updateConfigurationsPaymentLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configurationsPaymentLogService.remove(+id);
  }
}
