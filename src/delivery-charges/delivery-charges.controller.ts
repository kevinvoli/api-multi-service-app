import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryChargesService } from './delivery-charges.service';
import { CreateDeliveryChargeDto } from './dto/create-delivery-charge.dto';
import { UpdateDeliveryChargeDto } from './dto/update-delivery-charge.dto';

@Controller('delivery-charges')
export class DeliveryChargesController {
  constructor(private readonly deliveryChargesService: DeliveryChargesService) {}

  @Post()
  create(@Body() createDeliveryChargeDto: CreateDeliveryChargeDto) {
    return this.deliveryChargesService.create(createDeliveryChargeDto);
  }

  @Get()
  findAll() {
    return this.deliveryChargesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryChargesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryChargeDto: UpdateDeliveryChargeDto) {
    return this.deliveryChargesService.update(+id, updateDeliveryChargeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryChargesService.remove(+id);
  }
}
