import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './entities/vehicle.entity';
import { Driver } from './entities/driver.entity';
import { IsNumber, IsString, IsOptional } from 'class-validator';

// DTOs (for simplicity, defined here, but should be in separate files)
class CreateVehicleDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  year: number;

  @IsString()
  licensePlate: string;
}

class UpdateVehicleDto {
  @IsOptional()
  @IsString()
  make?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsNumber()
  year?: number;

  @IsOptional()
  @IsString()
  licensePlate?: string;
}

class CreateDriverDto {
  @IsNumber()
  userId: number;
}

class UpdateDriverDto {
  @IsOptional()
  @IsNumber()
  userId?: number;
}

class AssignVehicleToDriverDto {
  @IsNumber()
  driverId: number;
}

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  // Vehicle Endpoints
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createVehicle(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehiclesService.createVehicle(createVehicleDto);
  }

  @Get()
  findAllVehicles(): Promise<Vehicle[]> {
    return this.vehiclesService.findAllVehicles();
  }

  @Get(':id')
  findOneVehicle(@Param('id') id: string): Promise<Vehicle> {
    return this.vehiclesService.findOneVehicle(+id);
  }

  @Patch(':id')
  updateVehicle(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    return this.vehiclesService.updateVehicle(+id, updateVehicleDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeVehicle(@Param('id') id: string): Promise<void> {
    return this.vehiclesService.removeVehicle(+id);
  }

  // Driver Endpoints
  @Post('drivers')
  @HttpCode(HttpStatus.CREATED)
  createDriver(@Body() createDriverDto: CreateDriverDto): Promise<Driver> {
    return this.vehiclesService.createDriver(createDriverDto.userId);
  }

  @Get('drivers')
  findAllDrivers(): Promise<Driver[]> {
    return this.vehiclesService.findAllDrivers();
  }

  @Get('drivers/:id')
  findOneDriver(@Param('id') id: string): Promise<Driver> {
    return this.vehiclesService.findOneDriver(+id);
  }

  @Patch('drivers/:id')
  updateDriver(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto): Promise<Driver> {
    // Note: updating driver directly might not be ideal as it's linked to User
    return this.vehiclesService.updateDriver(+id, updateDriverDto);
  }

  @Delete('drivers/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeDriver(@Param('id') id: string): Promise<void> {
    return this.vehiclesService.removeDriver(+id);
  }

  @Patch(':vehicleId/assign-to-driver')
  assignVehicleToDriver(
    @Param('vehicleId') vehicleId: string,
    @Body() assignVehicleToDriverDto: AssignVehicleToDriverDto,
  ): Promise<Vehicle> {
    return this.vehiclesService.assignVehicleToDriver(+vehicleId, assignVehicleToDriverDto.driverId);
  }
}
