import { Module } from '@nestjs/common';
import { BiddingDriverRequestService } from './bidding-driver-request.service';
import { BiddingDriverRequestController } from './bidding-driver-request.controller';

@Module({
  controllers: [BiddingDriverRequestController],
  providers: [BiddingDriverRequestService],
})
export class BiddingDriverRequestModule {}
