import { Module } from '@nestjs/common';
import { TripsRouteLocationsService } from './trips-route-locations.service';
import { TripsRouteLocationsController } from './trips-route-locations.controller';

@Module({
  controllers: [TripsRouteLocationsController],
  providers: [TripsRouteLocationsService],
})
export class TripsRouteLocationsModule {}
