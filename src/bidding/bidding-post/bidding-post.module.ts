import { Module } from '@nestjs/common';
import { BiddingPost } from './entities/bidding-post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingPostService } from './bidding-post.service';
import { BiddingPostController } from './bidding-post.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingPost])],
  controllers: [BiddingPostController],
  providers: [BiddingPostService],
  exports: [TypeOrmModule.forFeature([BiddingPost])],
})
export class BiddingPostModule {}
