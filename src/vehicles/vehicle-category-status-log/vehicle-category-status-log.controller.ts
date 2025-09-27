import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleCategoryStatusLogService } from './vehicle-category-status-log.service';
import { CreateVehicleCategoryStatusLogDto } from './dto/create-vehicle-category-status-log.dto';
import { UpdateVehicleCategoryStatusLogDto } from './dto/update-vehicle-category-status-log.dto';

@Controller('vehicle-category-status-log')
export class VehicleCategoryStatusLogController {
  constructor(private readonly vehicleCategoryStatusLogService: VehicleCategoryStatusLogService) {}

  @Post()
  async create(@Body() createDto: CreateVehicleCategoryStatusLogDto) {
    return await this.vehicleCategoryStatusLogService.create(createDto);
  }

  @Get()
  async findAll() {
    return await this.vehicleCategoryStatusLogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.vehicleCategoryStatusLogService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateVehicleCategoryStatusLogDto) {
    return await this.vehicleCategoryStatusLogService.update(+id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.vehicleCategoryStatusLogService.remove(+id);
  }
}