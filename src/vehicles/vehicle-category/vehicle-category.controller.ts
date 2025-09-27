import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleCategoryService } from './vehicle-category.service';
import { CreateVehicleCategoryDto } from './dto/create-vehicle-category.dto';
import { UpdateVehicleCategoryDto } from './dto/update-vehicle-category.dto';

@Controller('vehicle-category')
export class VehicleCategoryController {
  constructor(private readonly vehicleCategoryService: VehicleCategoryService) {}

  @Post()
  async create(@Body() createVehicleCategoryDto: CreateVehicleCategoryDto) {
    return await this.vehicleCategoryService.create(createVehicleCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.vehicleCategoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.vehicleCategoryService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVehicleCategoryDto: UpdateVehicleCategoryDto) {
    return await this.vehicleCategoryService.update(+id, updateVehicleCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.vehicleCategoryService.remove(+id);
  }
}