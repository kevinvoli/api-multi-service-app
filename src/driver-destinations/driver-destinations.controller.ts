import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverDestinationsService } from './driver-destinations.service';
import { CreateDriverDestinationDto } from './dto/create-driver-destination.dto';
import { UpdateDriverDestinationDto } from './dto/update-driver-destination.dto';

@Controller('driver-destinations')
export class DriverDestinationsController {
  constructor(private readonly driverDestinationsService: DriverDestinationsService) {}

  @Post()
  create(@Body() createDriverDestinationDto: CreateDriverDestinationDto) {
    return this.driverDestinationsService.create(createDriverDestinationDto);
  }

  @Get()
  findAll() {
    return this.driverDestinationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverDestinationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDestinationDto: UpdateDriverDestinationDto) {
    return this.driverDestinationsService.update(+id, updateDriverDestinationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverDestinationsService.remove(+id);
  }
}
