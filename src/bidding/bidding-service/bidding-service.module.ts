import { Module } from '@nestjs/common';
import { BiddingServiceService } from './bidding-service.service';
import { BiddingServiceController } from './bidding-service.controller';

@Module({
  controllers: [BiddingServiceController],
  providers: [BiddingServiceService],
})
export class BiddingServiceModule {}
