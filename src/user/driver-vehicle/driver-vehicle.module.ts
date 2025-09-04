import { Module } from '@nestjs/common';
import { DriverVehicleService } from './driver-vehicle.service';
import { DriverVehicleController } from './driver-vehicle.controller';

@Module({
  controllers: [DriverVehicleController],
  providers: [DriverVehicleService],
})
export class DriverVehicleModule {}
