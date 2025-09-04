import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomDeliveryChargesOrderService } from './custom-delivery-charges-order.service';
import { CreateCustomDeliveryChargesOrderDto } from './dto/create-custom-delivery-charges-order.dto';
import { UpdateCustomDeliveryChargesOrderDto } from './dto/update-custom-delivery-charges-order.dto';

@Controller('custom-delivery-charges-order')
export class CustomDeliveryChargesOrderController {
  constructor(private readonly customDeliveryChargesOrderService: CustomDeliveryChargesOrderService) {}

  @Post()
  create(@Body() createCustomDeliveryChargesOrderDto: CreateCustomDeliveryChargesOrderDto) {
    return this.customDeliveryChargesOrderService.create(createCustomDeliveryChargesOrderDto);
  }

  @Get()
  findAll() {
    return this.customDeliveryChargesOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customDeliveryChargesOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomDeliveryChargesOrderDto: UpdateCustomDeliveryChargesOrderDto) {
    return this.customDeliveryChargesOrderService.update(+id, updateCustomDeliveryChargesOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customDeliveryChargesOrderService.remove(+id);
  }
}
