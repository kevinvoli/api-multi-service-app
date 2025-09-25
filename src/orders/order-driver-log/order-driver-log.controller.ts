import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderDriverLogService } from './order-driver-log.service';
import { CreateOrderDriverLogDto } from './dto/create-order-driver-log.dto';
import { UpdateOrderDriverLogDto } from './dto/update-order-driver-log.dto';

@Controller('order-driver-log')
export class OrderDriverLogController {
  constructor(private readonly orderDriverLogService: OrderDriverLogService) {}

  @Post()
  create(@Body() createOrderDriverLogDto: CreateOrderDriverLogDto) {
    return this.orderDriverLogService.create(createOrderDriverLogDto);
  }

  @Get()
  findAll() {
    return this.orderDriverLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderDriverLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDriverLogDto: UpdateOrderDriverLogDto) {
    return this.orderDriverLogService.update(+id, updateOrderDriverLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderDriverLogService.remove(+id);
  }
}
