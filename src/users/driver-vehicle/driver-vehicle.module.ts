import { Module } from '@nestjs/common';
import { DriverVehicle } from './entities/driver-vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverVehicleService } from './driver-vehicle.service';
import { DriverVehicleController } from './driver-vehicle.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverVehicle])],
  controllers: [DriverVehicleController],
  providers: [DriverVehicleService],
  exports: [TypeOrmModule.forFeature([DriverVehicle])],
})
export class DriverVehicleModule {}
