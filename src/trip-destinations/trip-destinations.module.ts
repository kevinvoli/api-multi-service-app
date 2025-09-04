import { Module } from '@nestjs/common';
import { TripDestinationsService } from './trip-destinations.service';
import { TripDestinationsController } from './trip-destinations.controller';

@Module({
  controllers: [TripDestinationsController],
  providers: [TripDestinationsService],
})
export class TripDestinationsModule {}
