import { Module } from '@nestjs/common';
import { Trips } from './entities/trip.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsService } from './trips.service';
import { TripsController } from './trips.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Trips])],
  controllers: [TripsController],
  providers: [TripsService],
  exports: [TypeOrmModule.forFeature([Trips])],
})
export class TripsModule {}
