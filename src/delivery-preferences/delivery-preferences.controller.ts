import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryPreferencesService } from './delivery-preferences.service';
import { CreateDeliveryPreferenceDto } from './dto/create-delivery-preference.dto';
import { UpdateDeliveryPreferenceDto } from './dto/update-delivery-preference.dto';

@Controller('delivery-preferences')
export class DeliveryPreferencesController {
  constructor(private readonly deliveryPreferencesService: DeliveryPreferencesService) {}

  @Post()
  create(@Body() createDeliveryPreferenceDto: CreateDeliveryPreferenceDto) {
    return this.deliveryPreferencesService.create(createDeliveryPreferenceDto);
  }

  @Get()
  findAll() {
    return this.deliveryPreferencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryPreferencesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryPreferenceDto: UpdateDeliveryPreferenceDto) {
    return this.deliveryPreferencesService.update(+id, updateDeliveryPreferenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryPreferencesService.remove(+id);
  }
}
