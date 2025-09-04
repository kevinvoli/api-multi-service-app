import { Module } from '@nestjs/common';
import { TripsStopoverpointLocationService } from './trips-stopoverpoint-location.service';
import { TripsStopoverpointLocationController } from './trips-stopoverpoint-location.controller';

@Module({
  controllers: [TripsStopoverpointLocationController],
  providers: [TripsStopoverpointLocationService],
})
export class TripsStopoverpointLocationModule {}
