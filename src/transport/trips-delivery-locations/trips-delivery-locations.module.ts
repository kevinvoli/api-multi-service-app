import { Module } from '@nestjs/common';
import { TripsDeliveryLocation } from './entities/trips-delivery-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsDeliveryLocationsService } from './trips-delivery-locations.service';
import { TripsDeliveryLocationsController } from './trips-delivery-locations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripsDeliveryLocation])],
  controllers: [TripsDeliveryLocationsController],
  providers: [TripsDeliveryLocationsService],
  exports: [TypeOrmModule.forFeature([TripsDeliveryLocation])],
})
export class TripsDeliveryLocationsModule {}
