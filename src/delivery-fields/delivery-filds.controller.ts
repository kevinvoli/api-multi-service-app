import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryFildsService } from './delivery-filds.service';
import { CreateDeliveryFildDto } from './dto/create-delivery-fild.dto';
import { UpdateDeliveryFildDto } from './dto/update-delivery-fild.dto';

@Controller('delivery-filds')
export class DeliveryFildsController {
  constructor(private readonly deliveryFildsService: DeliveryFildsService) {}

  @Post()
  create(@Body() createDeliveryFildDto: CreateDeliveryFildDto) {
    return this.deliveryFildsService.create(createDeliveryFildDto);
  }

  @Get()
  findAll() {
    return this.deliveryFildsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryFildsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryFildDto: UpdateDeliveryFildDto) {
    return this.deliveryFildsService.update(+id, updateDeliveryFildDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryFildsService.remove(+id);
  }
}
