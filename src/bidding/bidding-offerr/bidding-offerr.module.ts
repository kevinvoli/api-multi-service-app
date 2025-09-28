import { Module } from '@nestjs/common';
import { BiddingOfferrService } from './bidding-offerr.service';
import { BiddingOfferrController } from './bidding-offerr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingOffer } from './entities/bidding-offerr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingOffer])],
  controllers: [BiddingOfferrController],
  providers: [BiddingOfferrService],
})
export class BiddingOfferrModule {}
