import { Module } from '@nestjs/common';
import { BiddingPostService } from './bidding-post.service';
import { BiddingPostController } from './bidding-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingPost } from './entities/bidding-post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingPost])],
  controllers: [BiddingPostController],
  providers: [BiddingPostService],
})
export class BiddingPostModule {}
