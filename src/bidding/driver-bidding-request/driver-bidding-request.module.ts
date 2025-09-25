import { Module } from '@nestjs/common';
import { DriverBiddingRequestService } from './driver-bidding-request.service';
import { DriverBiddingRequestController } from './driver-bidding-request.controller';

@Module({
  controllers: [DriverBiddingRequestController],
  providers: [DriverBiddingRequestService],
})
export class DriverBiddingRequestModule {}
