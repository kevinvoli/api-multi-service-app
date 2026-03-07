import { Module } from '@nestjs/common';
import { BiddingOffer } from './entities/bidding-offerr.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingOfferrService } from './bidding-offerr.service';
import { BiddingOfferrController } from './bidding-offerr.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingOffer])],
  controllers: [BiddingOfferrController],
  providers: [BiddingOfferrService],
  exports: [TypeOrmModule.forFeature([BiddingOffer])],
})
export class BiddingOfferrModule {}
