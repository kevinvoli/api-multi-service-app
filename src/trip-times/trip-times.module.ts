import { Module } from '@nestjs/common';
import { TripTimesService } from './trip-times.service';
import { TripTimesController } from './trip-times.controller';

@Module({
  controllers: [TripTimesController],
  providers: [TripTimesService],
})
export class TripTimesModule {}
