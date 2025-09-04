import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderDeliveryChargeDetailsService } from './order-delivery-charge-details.service';
import { CreateOrderDeliveryChargeDetailDto } from './dto/create-order-delivery-charge-detail.dto';
import { UpdateOrderDeliveryChargeDetailDto } from './dto/update-order-delivery-charge-detail.dto';

@Controller('order-delivery-charge-details')
export class OrderDeliveryChargeDetailsController {
  constructor(private readonly orderDeliveryChargeDetailsService: OrderDeliveryChargeDetailsService) {}

  @Post()
  create(@Body() createOrderDeliveryChargeDetailDto: CreateOrderDeliveryChargeDetailDto) {
    return this.orderDeliveryChargeDetailsService.create(createOrderDeliveryChargeDetailDto);
  }

  @Get()
  findAll() {
    return this.orderDeliveryChargeDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderDeliveryChargeDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDeliveryChargeDetailDto: UpdateOrderDeliveryChargeDetailDto) {
    return this.orderDeliveryChargeDetailsService.update(+id, updateOrderDeliveryChargeDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderDeliveryChargeDetailsService.remove(+id);
  }
}
