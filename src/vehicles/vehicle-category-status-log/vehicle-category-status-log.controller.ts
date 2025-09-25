import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleCategoryStatusLogService } from './vehicle-category-status-log.service';
import { CreateVehicleCategoryStatusLogDto } from './dto/create-vehicle-category-status-log.dto';
import { UpdateVehicleCategoryStatusLogDto } from './dto/update-vehicle-category-status-log.dto';

@Controller('vehicle-category-status-log')
export class VehicleCategoryStatusLogController {
  constructor(private readonly vehicleCategoryStatusLogService: VehicleCategoryStatusLogService) {}

  @Post()
  create(@Body() createVehicleCategoryStatusLogDto: CreateVehicleCategoryStatusLogDto) {
    return this.vehicleCategoryStatusLogService.create(createVehicleCategoryStatusLogDto);
  }

  @Get()
  findAll() {
    return this.vehicleCategoryStatusLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleCategoryStatusLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleCategoryStatusLogDto: UpdateVehicleCategoryStatusLogDto) {
    return this.vehicleCategoryStatusLogService.update(+id, updateVehicleCategoryStatusLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleCategoryStatusLogService.remove(+id);
  }
}
