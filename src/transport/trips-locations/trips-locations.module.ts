import { Module } from '@nestjs/common';
import { TripsLocationsService } from './trips-locations.service';
import { TripsLocationsController } from './trips-locations.controller';

@Module({
  controllers: [TripsLocationsController],
  providers: [TripsLocationsService],
})
export class TripsLocationsModule {}
