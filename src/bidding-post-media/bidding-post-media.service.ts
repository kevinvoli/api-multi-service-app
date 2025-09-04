import { Injectable } from '@nestjs/common';
import { CreateBiddingPostMediaDto } from './dto/create-bidding-post-media.dto';
import { UpdateBiddingPostMediaDto } from './dto/update-bidding-post-media.dto';

@Injectable()
export class BiddingPostMediaService {
  create(createBiddingPostMediaDto: CreateBiddingPostMediaDto) {
    return 'This action adds a new biddingPostMedia';
  }

  findAll() {
    return `This action returns all biddingPostMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biddingPostMedia`;
  }

  update(id: number, updateBiddingPostMediaDto: UpdateBiddingPostMediaDto) {
    return `This action updates a #${id} biddingPostMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} biddingPostMedia`;
  }
}
