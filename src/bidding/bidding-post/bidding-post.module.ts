import { Module } from '@nestjs/common';
import { BiddingPostService } from './bidding-post.service';
import { BiddingPostController } from './bidding-post.controller';

@Module({
  controllers: [BiddingPostController],
  providers: [BiddingPostService],
})
export class BiddingPostModule {}
