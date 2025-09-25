import { PartialType } from '@nestjs/mapped-types';
import { CreateBiddingServiceRatingDto } from './create-bidding-service-rating.dto';

export class UpdateBiddingServiceRatingDto extends PartialType(CreateBiddingServiceRatingDto) {}
