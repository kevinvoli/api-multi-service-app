import { Module } from '@nestjs/common';
import { DriverVehicleServiceRequestService } from './driver-vehicle-service-request.service';
import { DriverVehicleServiceRequestController } from './driver-vehicle-service-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverVehicleServiceRequest } from './entities/driver-vehicle-service-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverVehicleServiceRequest])],
  controllers: [DriverVehicleServiceRequestController],
  providers: [DriverVehicleServiceRequestService],
})
export class DriverVehicleServiceRequestModule {}
