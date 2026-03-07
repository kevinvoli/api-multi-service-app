import { Module } from '@nestjs/common';
import { TripsRouteLocations } from './entities/trips-route-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsRouteLocationsService } from './trips-route-locations.service';
import { TripsRouteLocationsController } from './trips-route-locations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripsRouteLocations])],
  controllers: [TripsRouteLocationsController],
  providers: [TripsRouteLocationsService],
  exports: [TypeOrmModule.forFeature([TripsRouteLocations])],
})
export class TripsRouteLocationsModule {}
