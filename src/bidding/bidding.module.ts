import { Module } from '@nestjs/common';
import { BiddingDriverRequestModule } from './bidding-driver-request/bidding-driver-request.module';
import { BiddingDriverServiceModule } from './bidding-driver-service/bidding-driver-service.module';
import { BiddingOfferrModule } from './bidding-offerr/bidding-offerr.module';
import { BiddingPostModule } from './bidding-post/bidding-post.module';
import { BiddingPostMediaModule } from './bidding-post-media/bidding-post-media.module';
import { BiddingServiceModule } from './bidding-service/bidding-service.module';
import { BiddingServiceRatingsModule } from './bidding-service-ratings/bidding-service-ratings.module';
import { DriverBiddingRequestModule } from './driver-bidding-request/driver-bidding-request.module';

@Module({
  imports: [
    BiddingDriverRequestModule,
    BiddingDriverServiceModule,
    BiddingOfferrModule,
    BiddingPostModule,
    BiddingPostMediaModule,
    BiddingServiceModule,
    BiddingServiceRatingsModule,
    DriverBiddingRequestModule,
  ],
  exports: [
    BiddingDriverRequestModule,
    BiddingDriverServiceModule,
    BiddingOfferrModule,
    BiddingPostModule,
    BiddingPostMediaModule,
    BiddingServiceModule,
    BiddingServiceRatingsModule,
    DriverBiddingRequestModule,
  ],
})
export class BiddingModule {}