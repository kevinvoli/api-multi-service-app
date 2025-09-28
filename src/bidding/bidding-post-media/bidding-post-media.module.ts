import { Module } from '@nestjs/common';
import { BiddingPostMediaService } from './bidding-post-media.service';
import { BiddingPostMediaController } from './bidding-post-media.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingPostMedia } from './entities/bidding-post-media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingPostMedia])],
  controllers: [BiddingPostMediaController],
  providers: [BiddingPostMediaService],
})
export class BiddingPostMediaModule {}
