import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripDestinationsService } from './trip-destinations.service';
import { CreateTripDestinationDto } from './dto/create-trip-destination.dto';
import { UpdateTripDestinationDto } from './dto/update-trip-destination.dto';

@Controller('trip-destinations')
export class TripDestinationsController {
  constructor(private readonly tripDestinationsService: TripDestinationsService) {}

  @Post()
  create(@Body() createTripDestinationDto: CreateTripDestinationDto) {
    return this.tripDestinationsService.create(createTripDestinationDto);
  }

  @Get()
  findAll() {
    return this.tripDestinationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripDestinationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripDestinationDto: UpdateTripDestinationDto) {
    return this.tripDestinationsService.update(+id, updateTripDestinationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripDestinationsService.remove(+id);
  }
}
