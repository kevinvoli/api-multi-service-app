import { Module } from '@nestjs/common';
import { FlyLocationWiseFareService } from './fly-location-wise-fare.service';
import { FlyLocationWiseFareController } from './fly-location-wise-fare.controller';

@Module({
  controllers: [FlyLocationWiseFareController],
  providers: [FlyLocationWiseFareService],
})
export class FlyLocationWiseFareModule {}
