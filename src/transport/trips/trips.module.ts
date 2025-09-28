import { Module } from '@nestjs/common';
import { TripsService } from './trips.service';
import { TripsController } from './trips.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trips } from './entities/trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trips])],
  controllers: [TripsController],
  providers: [TripsService],
})
export class TripsModule {}
