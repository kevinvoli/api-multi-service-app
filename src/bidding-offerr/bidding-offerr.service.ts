import { Injectable } from '@nestjs/common';
import { CreateBiddingOfferrDto } from './dto/create-bidding-offerr.dto';
import { UpdateBiddingOfferrDto } from './dto/update-bidding-offerr.dto';

@Injectable()
export class BiddingOfferrService {
  create(createBiddingOfferrDto: CreateBiddingOfferrDto) {
    return 'This action adds a new biddingOfferr';
  }

  findAll() {
    return `This action returns all biddingOfferr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biddingOfferr`;
  }

  update(id: number, updateBiddingOfferrDto: UpdateBiddingOfferrDto) {
    return `This action updates a #${id} biddingOfferr`;
  }

  remove(id: number) {
    return `This action removes a #${id} biddingOfferr`;
  }
}
