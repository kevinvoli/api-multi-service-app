import { Module } from '@nestjs/common';
import { OdaLocationsOrdersUnavailabilitiesService } from './oda-locations-orders-unavailabilities.service';
import { OdaLocationsOrdersUnavailabilitiesController } from './oda-locations-orders-unavailabilities.controller';

@Module({
  controllers: [OdaLocationsOrdersUnavailabilitiesController],
  providers: [OdaLocationsOrdersUnavailabilitiesService],
})
export class OdaLocationsOrdersUnavailabilitiesModule {}
