import { Module } from '@nestjs/common';
import { BiddingDriverServiceService } from './bidding-driver-service.service';
import { BiddingDriverServiceController } from './bidding-driver-service.controller';

@Module({
  controllers: [BiddingDriverServiceController],
  providers: [BiddingDriverServiceService],
})
export class BiddingDriverServiceModule {}
