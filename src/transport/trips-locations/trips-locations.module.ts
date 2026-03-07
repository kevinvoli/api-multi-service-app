import { Module } from '@nestjs/common';
import { TripsLocations } from './entities/trips-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsLocationsService } from './trips-locations.service';
import { TripsLocationsController } from './trips-locations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripsLocations])],
  controllers: [TripsLocationsController],
  providers: [TripsLocationsService],
  exports: [TypeOrmModule.forFeature([TripsLocations])],
})
export class TripsLocationsModule {}
