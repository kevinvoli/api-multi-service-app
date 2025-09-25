import { Injectable } from '@nestjs/common';
import { CreateBiddingServiceRatingDto } from './dto/create-bidding-service-rating.dto';
import { UpdateBiddingServiceRatingDto } from './dto/update-bidding-service-rating.dto';

@Injectable()
export class BiddingServiceRatingsService {
  create(createBiddingServiceRatingDto: CreateBiddingServiceRatingDto) {
    return 'This action adds a new biddingServiceRating';
  }

  findAll() {
    return `This action returns all biddingServiceRatings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biddingServiceRating`;
  }

  update(id: number, updateBiddingServiceRatingDto: UpdateBiddingServiceRatingDto) {
    return `This action updates a #${id} biddingServiceRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} biddingServiceRating`;
  }
}
