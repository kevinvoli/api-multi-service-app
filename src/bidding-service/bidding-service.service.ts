import { Injectable } from '@nestjs/common';
import { CreateBiddingServiceDto } from './dto/create-bidding-service.dto';
import { UpdateBiddingServiceDto } from './dto/update-bidding-service.dto';

@Injectable()
export class BiddingServiceService {
  create(createBiddingServiceDto: CreateBiddingServiceDto) {
    return 'This action adds a new biddingService';
  }

  findAll() {
    return `This action returns all biddingService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biddingService`;
  }

  update(id: number, updateBiddingServiceDto: UpdateBiddingServiceDto) {
    return `This action updates a #${id} biddingService`;
  }

  remove(id: number) {
    return `This action removes a #${id} biddingService`;
  }
}
