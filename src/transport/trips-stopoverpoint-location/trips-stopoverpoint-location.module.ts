import { Module } from '@nestjs/common';
import { TripsStopoverpointLocation } from './entities/trips-stopoverpoint-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsStopoverpointLocationService } from './trips-stopoverpoint-location.service';
import { TripsStopoverpointLocationController } from './trips-stopoverpoint-location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripsStopoverpointLocation])],
  controllers: [TripsStopoverpointLocationController],
  providers: [TripsStopoverpointLocationService],
  exports: [TypeOrmModule.forFeature([TripsStopoverpointLocation])],
})
export class TripsStopoverpointLocationModule {}
