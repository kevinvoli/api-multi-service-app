import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverVehicleServiceRequestService } from './driver-vehicle-service-request.service';
import { CreateDriverVehicleServiceRequestDto } from './dto/create-driver-vehicle-service-request.dto';
import { UpdateDriverVehicleServiceRequestDto } from './dto/update-driver-vehicle-service-request.dto';

@Controller('driver-vehicle-service-request')
export class DriverVehicleServiceRequestController {
  constructor(private readonly driverVehicleServiceRequestService: DriverVehicleServiceRequestService) {}

  @Post()
  create(@Body() createDriverVehicleServiceRequestDto: CreateDriverVehicleServiceRequestDto) {
    return this.driverVehicleServiceRequestService.create(createDriverVehicleServiceRequestDto);
  }

  @Get()
  findAll() {
    return this.driverVehicleServiceRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverVehicleServiceRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverVehicleServiceRequestDto: UpdateDriverVehicleServiceRequestDto) {
    return this.driverVehicleServiceRequestService.update(+id, updateDriverVehicleServiceRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverVehicleServiceRequestService.remove(+id);
  }
}
