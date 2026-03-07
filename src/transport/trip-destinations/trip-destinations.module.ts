import { Module } from '@nestjs/common';
import { TripDestinations } from './entities/trip-destination.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripDestinationsService } from './trip-destinations.service';
import { TripDestinationsController } from './trip-destinations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripDestinations])],
  controllers: [TripDestinationsController],
  providers: [TripDestinationsService],
  exports: [TypeOrmModule.forFeature([TripDestinations])],
})
export class TripDestinationsModule {}
