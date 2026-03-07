import { Module } from '@nestjs/common';
import { BiddingPostMedia } from './entities/bidding-post-media.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingPostMediaService } from './bidding-post-media.service';
import { BiddingPostMediaController } from './bidding-post-media.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingPostMedia])],
  controllers: [BiddingPostMediaController],
  providers: [BiddingPostMediaService],
  exports: [TypeOrmModule.forFeature([BiddingPostMedia])],
})
export class BiddingPostMediaModule {}
