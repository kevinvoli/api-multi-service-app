import { Module } from '@nestjs/common';
import { TripsDeliveryLocationsService } from './trips-delivery-locations.service';
import { TripsDeliveryLocationsController } from './trips-delivery-locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsDeliveryLocations } from './entities/trips-delivery-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripsDeliveryLocations])],
  controllers: [TripsDeliveryLocationsController],
  providers: [TripsDeliveryLocationsService],
})
export class TripsDeliveryLocationsModule {}
