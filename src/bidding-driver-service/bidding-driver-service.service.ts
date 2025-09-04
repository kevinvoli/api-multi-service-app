import { Injectable } from '@nestjs/common';
import { CreateBiddingDriverServiceDto } from './dto/create-bidding-driver-service.dto';
import { UpdateBiddingDriverServiceDto } from './dto/update-bidding-driver-service.dto';

@Injectable()
export class BiddingDriverServiceService {
  create(createBiddingDriverServiceDto: CreateBiddingDriverServiceDto) {
    return 'This action adds a new biddingDriverService';
  }

  findAll() {
    return `This action returns all biddingDriverService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biddingDriverService`;
  }

  update(id: number, updateBiddingDriverServiceDto: UpdateBiddingDriverServiceDto) {
    return `This action updates a #${id} biddingDriverService`;
  }

  remove(id: number) {
    return `This action removes a #${id} biddingDriverService`;
  }
}
