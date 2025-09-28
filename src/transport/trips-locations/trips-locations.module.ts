import { Module } from '@nestjs/common';
import { TripsLocationsService } from './trips-locations.service';
import { TripsLocationsController } from './trips-locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsLocations } from './entities/trips-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripsLocations])],
  controllers: [TripsLocationsController],
  providers: [TripsLocationsService],
})
export class TripsLocationsModule {}
