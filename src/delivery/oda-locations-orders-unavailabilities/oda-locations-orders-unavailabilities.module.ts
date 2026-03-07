import { Module } from '@nestjs/common';
import { OdaLocationsOrdersUnavailabilities } from './entities/oda-locations-orders-unavailability.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaLocationsOrdersUnavailabilitiesService } from './oda-locations-orders-unavailabilities.service';
import { OdaLocationsOrdersUnavailabilitiesController } from './oda-locations-orders-unavailabilities.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OdaLocationsOrdersUnavailabilities])],
  controllers: [OdaLocationsOrdersUnavailabilitiesController],
  providers: [OdaLocationsOrdersUnavailabilitiesService],
  exports: [TypeOrmModule.forFeature([OdaLocationsOrdersUnavailabilities])],
})
export class OdaLocationsOrdersUnavailabilitiesModule {}
