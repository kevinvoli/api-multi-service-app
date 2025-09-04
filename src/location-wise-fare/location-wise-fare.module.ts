import { Module } from '@nestjs/common';
import { LocationWiseFareService } from './location-wise-fare.service';
import { LocationWiseFareController } from './location-wise-fare.controller';

@Module({
  controllers: [LocationWiseFareController],
  providers: [LocationWiseFareService],
})
export class LocationWiseFareModule {}
