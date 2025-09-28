import { Module } from '@nestjs/common';
import { TripDestinationsService } from './trip-destinations.service';
import { TripDestinationsController } from './trip-destinations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripDestinations } from './entities/trip-destination.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripDestinations])],
  controllers: [TripDestinationsController],
  providers: [TripDestinationsService],
})
export class TripDestinationsModule {}
