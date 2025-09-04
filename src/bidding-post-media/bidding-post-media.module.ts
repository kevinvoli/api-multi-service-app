import { Module } from '@nestjs/common';
import { BiddingPostMediaService } from './bidding-post-media.service';
import { BiddingPostMediaController } from './bidding-post-media.controller';

@Module({
  controllers: [BiddingPostMediaController],
  providers: [BiddingPostMediaService],
})
export class BiddingPostMediaModule {}
