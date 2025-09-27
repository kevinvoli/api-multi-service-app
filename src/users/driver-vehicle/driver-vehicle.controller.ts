import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverVehicleService } from './driver-vehicle.service';
import { CreateDriverVehicleDto } from './dto/create-driver-vehicle.dto';
import { UpdateDriverVehicleDto } from './dto/update-driver-vehicle.dto';

@Controller('driver-vehicle')
export class DriverVehicleController {
  constructor(private readonly driverVehicleService: DriverVehicleService) {}

  @Post()
  async create(@Body() createDriverVehicleDto: CreateDriverVehicleDto) {
    return await this.driverVehicleService.create(createDriverVehicleDto);
  }

  @Get()
  async findAll() {
    return await this.driverVehicleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.driverVehicleService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDriverVehicleDto: UpdateDriverVehicleDto) {
    return await this.driverVehicleService.update(+id, updateDriverVehicleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.driverVehicleService.remove(+id);
  }
}
