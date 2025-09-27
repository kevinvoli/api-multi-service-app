import { Module } from '@nestjs/common';
import { DriverVehicleService } from './driver-vehicle.service';
import { DriverVehicleController } from './driver-vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverVehicle } from './entities/driver-vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverVehicle])],
  controllers: [DriverVehicleController],
  providers: [DriverVehicleService],
})
export class DriverVehicleModule {}
