import { Module } from '@nestjs/common';
import { BiddingServiceRatingsService } from './bidding-service-ratings.service';
import { BiddingServiceRatingsController } from './bidding-service-ratings.controller';

@Module({
  controllers: [BiddingServiceRatingsController],
  providers: [BiddingServiceRatingsService],
})
export class BiddingServiceRatingsModule {}
