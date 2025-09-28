import { Module } from '@nestjs/common';
import { TripTimesService } from './trip-times.service';
import { TripTimesController } from './trip-times.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripTimes } from './entities/trip-time.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripTimes])],
  controllers: [TripTimesController],
  providers: [TripTimesService],
})
export class TripTimesModule {}
