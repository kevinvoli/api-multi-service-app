import { Module } from '@nestjs/common';
import { BiddingOfferrService } from './bidding-offerr.service';
import { BiddingOfferrController } from './bidding-offerr.controller';

@Module({
  controllers: [BiddingOfferrController],
  providers: [BiddingOfferrService],
})
export class BiddingOfferrModule {}
