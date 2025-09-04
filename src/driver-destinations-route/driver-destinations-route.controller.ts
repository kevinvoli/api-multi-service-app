import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverDestinationsRouteService } from './driver-destinations-route.service';
import { CreateDriverDestinationsRouteDto } from './dto/create-driver-destinations-route.dto';
import { UpdateDriverDestinationsRouteDto } from './dto/update-driver-destinations-route.dto';

@Controller('driver-destinations-route')
export class DriverDestinationsRouteController {
  constructor(private readonly driverDestinationsRouteService: DriverDestinationsRouteService) {}

  @Post()
  create(@Body() createDriverDestinationsRouteDto: CreateDriverDestinationsRouteDto) {
    return this.driverDestinationsRouteService.create(createDriverDestinationsRouteDto);
  }

  @Get()
  findAll() {
    return this.driverDestinationsRouteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverDestinationsRouteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDestinationsRouteDto: UpdateDriverDestinationsRouteDto) {
    return this.driverDestinationsRouteService.update(+id, updateDriverDestinationsRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverDestinationsRouteService.remove(+id);
  }
}
