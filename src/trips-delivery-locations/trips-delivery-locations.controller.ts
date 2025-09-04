import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripsDeliveryLocationsService } from './trips-delivery-locations.service';
import { CreateTripsDeliveryLocationDto } from './dto/create-trips-delivery-location.dto';
import { UpdateTripsDeliveryLocationDto } from './dto/update-trips-delivery-location.dto';

@Controller('trips-delivery-locations')
export class TripsDeliveryLocationsController {
  constructor(private readonly tripsDeliveryLocationsService: TripsDeliveryLocationsService) {}

  @Post()
  create(@Body() createTripsDeliveryLocationDto: CreateTripsDeliveryLocationDto) {
    return this.tripsDeliveryLocationsService.create(createTripsDeliveryLocationDto);
  }

  @Get()
  findAll() {
    return this.tripsDeliveryLocationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripsDeliveryLocationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripsDeliveryLocationDto: UpdateTripsDeliveryLocationDto) {
    return this.tripsDeliveryLocationsService.update(+id, updateTripsDeliveryLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripsDeliveryLocationsService.remove(+id);
  }
}
