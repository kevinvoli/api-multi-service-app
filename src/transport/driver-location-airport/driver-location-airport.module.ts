import { Module } from '@nestjs/common';
import { DriverLocationAirportService } from './driver-location-airport.service';
import { DriverLocationAirportController } from './driver-location-airport.controller';

@Module({
  controllers: [DriverLocationAirportController],
  providers: [DriverLocationAirportService],
})
export class DriverLocationAirportModule {}
