import { Module } from '@nestjs/common';
import { DriverLocationAirportService } from './driver-location-airport.service';
import { DriverLocationAirportController } from './driver-location-airport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverLocationAirport } from './entities/driver-location-airport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverLocationAirport])],
  controllers: [DriverLocationAirportController],
  providers: [DriverLocationAirportService],
})
export class DriverLocationAirportModule {}
