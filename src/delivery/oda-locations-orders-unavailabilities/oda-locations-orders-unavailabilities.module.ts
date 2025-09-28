import { Module } from '@nestjs/common';
import { OdaLocationsOrdersUnavailabilitiesService } from './oda-locations-orders-unavailabilities.service';
import { OdaLocationsOrdersUnavailabilitiesController } from './oda-locations-orders-unavailabilities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaLocationsOrdersUnavailabilities } from './entities/oda-locations-orders-unavailability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OdaLocationsOrdersUnavailabilities])],
  controllers: [OdaLocationsOrdersUnavailabilitiesController],
  providers: [OdaLocationsOrdersUnavailabilitiesService],
})
export class OdaLocationsOrdersUnavailabilitiesModule {}
