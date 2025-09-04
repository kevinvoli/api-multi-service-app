import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverManageTimingService } from './driver-manage-timing.service';
import { CreateDriverManageTimingDto } from './dto/create-driver-manage-timing.dto';
import { UpdateDriverManageTimingDto } from './dto/update-driver-manage-timing.dto';

@Controller('driver-manage-timing')
export class DriverManageTimingController {
  constructor(private readonly driverManageTimingService: DriverManageTimingService) {}

  @Post()
  create(@Body() createDriverManageTimingDto: CreateDriverManageTimingDto) {
    return this.driverManageTimingService.create(createDriverManageTimingDto);
  }

  @Get()
  findAll() {
    return this.driverManageTimingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverManageTimingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverManageTimingDto: UpdateDriverManageTimingDto) {
    return this.driverManageTimingService.update(+id, updateDriverManageTimingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverManageTimingService.remove(+id);
  }
}
