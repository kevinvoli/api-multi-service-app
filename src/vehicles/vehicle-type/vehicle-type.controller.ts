import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleTypeService } from './vehicle-type.service';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';

@Controller('vehicle-type')
export class VehicleTypeController {
  constructor(private readonly vehicleTypeService: VehicleTypeService) {}

  @Post()
  async create(@Body() createDto: CreateVehicleTypeDto) {
    return await this.vehicleTypeService.create(createDto);
  }

  @Get()
  async findAll() {
    return await this.vehicleTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.vehicleTypeService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateVehicleTypeDto) {
    return await this.vehicleTypeService.update(+id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.vehicleTypeService.remove(+id);
  }
}