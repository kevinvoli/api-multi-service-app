import { Module } from '@nestjs/common';
import { BiddingServiceRatingsService } from './bidding-service-ratings.service';
import { BiddingServiceRatingsController } from './bidding-service-ratings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingServiceRatings } from './entities/bidding-service-rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingServiceRatings])],
  controllers: [BiddingServiceRatingsController],
  providers: [BiddingServiceRatingsService],
})
export class BiddingServiceRatingsModule {}
