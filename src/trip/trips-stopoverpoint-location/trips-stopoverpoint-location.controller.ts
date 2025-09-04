import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripsStopoverpointLocationService } from './trips-stopoverpoint-location.service';
import { CreateTripsStopoverpointLocationDto } from './dto/create-trips-stopoverpoint-location.dto';
import { UpdateTripsStopoverpointLocationDto } from './dto/update-trips-stopoverpoint-location.dto';

@Controller('trips-stopoverpoint-location')
export class TripsStopoverpointLocationController {
  constructor(private readonly tripsStopoverpointLocationService: TripsStopoverpointLocationService) {}

  @Post()
  create(@Body() createTripsStopoverpointLocationDto: CreateTripsStopoverpointLocationDto) {
    return this.tripsStopoverpointLocationService.create(createTripsStopoverpointLocationDto);
  }

  @Get()
  findAll() {
    return this.tripsStopoverpointLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripsStopoverpointLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripsStopoverpointLocationDto: UpdateTripsStopoverpointLocationDto) {
    return this.tripsStopoverpointLocationService.update(+id, updateTripsStopoverpointLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripsStopoverpointLocationService.remove(+id);
  }
}
