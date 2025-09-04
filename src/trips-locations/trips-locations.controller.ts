import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripsLocationsService } from './trips-locations.service';
import { CreateTripsLocationDto } from './dto/create-trips-location.dto';
import { UpdateTripsLocationDto } from './dto/update-trips-location.dto';

@Controller('trips-locations')
export class TripsLocationsController {
  constructor(private readonly tripsLocationsService: TripsLocationsService) {}

  @Post()
  create(@Body() createTripsLocationDto: CreateTripsLocationDto) {
    return this.tripsLocationsService.create(createTripsLocationDto);
  }

  @Get()
  findAll() {
    return this.tripsLocationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripsLocationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripsLocationDto: UpdateTripsLocationDto) {
    return this.tripsLocationsService.update(+id, updateTripsLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripsLocationsService.remove(+id);
  }
}
