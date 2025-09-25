import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripDeliveryFieldsService } from './trip-delivery-fields.service';
import { CreateTripDeliveryFieldDto } from './dto/create-trip-delivery-field.dto';
import { UpdateTripDeliveryFieldDto } from './dto/update-trip-delivery-field.dto';

@Controller('trip-delivery-fields')
export class TripDeliveryFieldsController {
  constructor(private readonly tripDeliveryFieldsService: TripDeliveryFieldsService) {}

  @Post()
  create(@Body() createTripDeliveryFieldDto: CreateTripDeliveryFieldDto) {
    return this.tripDeliveryFieldsService.create(createTripDeliveryFieldDto);
  }

  @Get()
  findAll() {
    return this.tripDeliveryFieldsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripDeliveryFieldsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripDeliveryFieldDto: UpdateTripDeliveryFieldDto) {
    return this.tripDeliveryFieldsService.update(+id, updateTripDeliveryFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripDeliveryFieldsService.remove(+id);
  }
}
