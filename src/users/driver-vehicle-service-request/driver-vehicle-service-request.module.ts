import { Module } from '@nestjs/common';
import { DriverVehicleServiceRequest } from './entities/driver-vehicle-service-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverVehicleServiceRequestService } from './driver-vehicle-service-request.service';
import { DriverVehicleServiceRequestController } from './driver-vehicle-service-request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverVehicleServiceRequest])],
  controllers: [DriverVehicleServiceRequestController],
  providers: [DriverVehicleServiceRequestService],
  exports: [TypeOrmModule.forFeature([DriverVehicleServiceRequest])],
})
export class DriverVehicleServiceRequestModule {}
