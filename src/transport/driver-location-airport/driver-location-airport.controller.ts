import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverLocationAirportService } from './driver-location-airport.service';
import { CreateDriverLocationAirportDto } from './dto/create-driver-location-airport.dto';
import { UpdateDriverLocationAirportDto } from './dto/update-driver-location-airport.dto';

@Controller('driver-location-airport')
export class DriverLocationAirportController {
  constructor(private readonly driverLocationAirportService: DriverLocationAirportService) {}

  @Post()
  create(@Body() createDriverLocationAirportDto: CreateDriverLocationAirportDto) {
    return this.driverLocationAirportService.create(createDriverLocationAirportDto);
  }

  @Get()
  findAll() {
    return this.driverLocationAirportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverLocationAirportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverLocationAirportDto: UpdateDriverLocationAirportDto) {
    return this.driverLocationAirportService.update(+id, updateDriverLocationAirportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverLocationAirportService.remove(+id);
  }
}
