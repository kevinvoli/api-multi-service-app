import { Module } from '@nestjs/common';
import { TripTimes } from './entities/trip-time.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripTimesService } from './trip-times.service';
import { TripTimesController } from './trip-times.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripTimes])],
  controllers: [TripTimesController],
  providers: [TripTimesService],
  exports: [TypeOrmModule.forFeature([TripTimes])],
})
export class TripTimesModule {}
