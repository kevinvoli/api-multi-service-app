import { Module } from '@nestjs/common';
import { TripsStopoverpointLocationService } from './trips-stopoverpoint-location.service';
import { TripsStopoverpointLocationController } from './trips-stopoverpoint-location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsStopoverpointLocation } from './entities/trips-stopoverpoint-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripsStopoverpointLocation])],
  controllers: [TripsStopoverpointLocationController],
  providers: [TripsStopoverpointLocationService],
})
export class TripsStopoverpointLocationModule {}
