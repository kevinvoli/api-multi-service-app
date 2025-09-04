import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripsRouteLocationsService } from './trips-route-locations.service';
import { CreateTripsRouteLocationDto } from './dto/create-trips-route-location.dto';
import { UpdateTripsRouteLocationDto } from './dto/update-trips-route-location.dto';

@Controller('trips-route-locations')
export class TripsRouteLocationsController {
  constructor(private readonly tripsRouteLocationsService: TripsRouteLocationsService) {}

  @Post()
  create(@Body() createTripsRouteLocationDto: CreateTripsRouteLocationDto) {
    return this.tripsRouteLocationsService.create(createTripsRouteLocationDto);
  }

  @Get()
  findAll() {
    return this.tripsRouteLocationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripsRouteLocationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripsRouteLocationDto: UpdateTripsRouteLocationDto) {
    return this.tripsRouteLocationsService.update(+id, updateTripsRouteLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripsRouteLocationsService.remove(+id);
  }
}
