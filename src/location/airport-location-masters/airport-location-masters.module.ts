import { Module } from '@nestjs/common';
import { AirportLocationMastersService } from './airport-location-masters.service';
import { AirportLocationMastersController } from './airport-location-masters.controller';

@Module({
  controllers: [AirportLocationMastersController],
  providers: [AirportLocationMastersService],
})
export class AirportLocationMastersModule {}
