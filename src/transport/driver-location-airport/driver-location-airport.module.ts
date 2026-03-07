import { Module } from '@nestjs/common';
import { DriverLocationAirport } from './entities/driver-location-airport.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverLocationAirportService } from './driver-location-airport.service';
import { DriverLocationAirportController } from './driver-location-airport.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverLocationAirport])],
  controllers: [DriverLocationAirportController],
  providers: [DriverLocationAirportService],
  exports: [TypeOrmModule.forFeature([DriverLocationAirport])],
})
export class DriverLocationAirportModule {}
