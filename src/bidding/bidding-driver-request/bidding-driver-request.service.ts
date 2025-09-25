import { Injectable } from '@nestjs/common';
import { CreateBiddingDriverRequestDto } from './dto/create-bidding-driver-request.dto';
import { UpdateBiddingDriverRequestDto } from './dto/update-bidding-driver-request.dto';

@Injectable()
export class BiddingDriverRequestService {
  create(createBiddingDriverRequestDto: CreateBiddingDriverRequestDto) {
    return 'This action adds a new biddingDriverRequest';
  }

  findAll() {
    return `This action returns all biddingDriverRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biddingDriverRequest`;
  }

  update(id: number, updateBiddingDriverRequestDto: UpdateBiddingDriverRequestDto) {
    return `This action updates a #${id} biddingDriverRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} biddingDriverRequest`;
  }
}
