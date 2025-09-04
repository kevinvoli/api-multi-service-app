import { Injectable } from '@nestjs/common';
import { CreateBiddingPostDto } from './dto/create-bidding-post.dto';
import { UpdateBiddingPostDto } from './dto/update-bidding-post.dto';

@Injectable()
export class BiddingPostService {
  create(createBiddingPostDto: CreateBiddingPostDto) {
    return 'This action adds a new biddingPost';
  }

  findAll() {
    return `This action returns all biddingPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biddingPost`;
  }

  update(id: number, updateBiddingPostDto: UpdateBiddingPostDto) {
    return `This action updates a #${id} biddingPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} biddingPost`;
  }
}
