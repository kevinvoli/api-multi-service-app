import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderRequestService } from './order-request.service';
import { CreateOrderRequestDto } from './dto/create-order-request.dto';
import { UpdateOrderRequestDto } from './dto/update-order-request.dto';

@Controller('order-request')
export class OrderRequestController {
  constructor(private readonly orderRequestService: OrderRequestService) {}

  @Post()
  create(@Body() createOrderRequestDto: CreateOrderRequestDto) {
    return this.orderRequestService.create(createOrderRequestDto);
  }

  @Get()
  findAll() {
    return this.orderRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderRequestDto: UpdateOrderRequestDto) {
    return this.orderRequestService.update(+id, updateOrderRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderRequestService.remove(+id);
  }
}
