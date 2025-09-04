import { Module } from '@nestjs/common';
import { TripOderDetailsService } from './trip-oder-details.service';
import { TripOderDetailsController } from './trip-oder-details.controller';

@Module({
  controllers: [TripOderDetailsController],
  providers: [TripOderDetailsService],
})
export class TripOderDetailsModule {}
