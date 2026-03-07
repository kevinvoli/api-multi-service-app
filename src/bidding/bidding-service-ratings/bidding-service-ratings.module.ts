import { Module } from '@nestjs/common';
import { BiddingServiceRatings } from './entities/bidding-service-rating.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingServiceRatingsService } from './bidding-service-ratings.service';
import { BiddingServiceRatingsController } from './bidding-service-ratings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingServiceRatings])],
  controllers: [BiddingServiceRatingsController],
  providers: [BiddingServiceRatingsService],
  exports: [TypeOrmModule.forFeature([BiddingServiceRatings])],
})
export class BiddingServiceRatingsModule {}
