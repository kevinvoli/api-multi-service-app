import { Module } from '@nestjs/common';
import { DriverVehicleServiceRequestService } from './driver-vehicle-service-request.service';
import { DriverVehicleServiceRequestController } from './driver-vehicle-service-request.controller';

@Module({
  controllers: [DriverVehicleServiceRequestController],
  providers: [DriverVehicleServiceRequestService],
})
export class DriverVehicleServiceRequestModule {}
