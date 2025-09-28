import { Module } from '@nestjs/common';
import { TripsRouteLocationsService } from './trips-route-locations.service';
import { TripsRouteLocationsController } from './trips-route-locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsRouteLocations } from './entities/trips-route-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripsRouteLocations])],
  controllers: [TripsRouteLocationsController],
  providers: [TripsRouteLocationsService],
})
export class TripsRouteLocationsModule {}
