import { PartialType } from '@nestjs/mapped-types';
import { CreateBiddingOfferrDto } from './create-bidding-offerr.dto';

export class UpdateBiddingOfferrDto extends PartialType(CreateBiddingOfferrDto) {}
