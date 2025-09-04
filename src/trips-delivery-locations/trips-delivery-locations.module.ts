import { Module } from '@nestjs/common';
import { TripsDeliveryLocationsService } from './trips-delivery-locations.service';
import { TripsDeliveryLocationsController } from './trips-delivery-locations.controller';

@Module({
  controllers: [TripsDeliveryLocationsController],
  providers: [TripsDeliveryLocationsService],
})
export class TripsDeliveryLocationsModule {}
