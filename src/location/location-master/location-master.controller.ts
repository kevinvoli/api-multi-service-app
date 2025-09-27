import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LocationMasterService } from './location-master.service';
import { CreateLocationMasterDto } from './dto/create-location-master.dto';
import { UpdateLocationMasterDto } from './dto/update-location-master.dto';

@Controller('location-master')
export class LocationMasterController {
  constructor(private readonly locationMasterService: LocationMasterService) {}

  @Post()
  create(@Body() createLocationMasterDto: CreateLocationMasterDto) {
    return this.locationMasterService.create(createLocationMasterDto);
  }

  @Get()
  findAll() {
    return this.locationMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.locationMasterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateLocationMasterDto: UpdateLocationMasterDto) {
    return this.locationMasterService.update(id, updateLocationMasterDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.locationMasterService.remove(id);
  }
}