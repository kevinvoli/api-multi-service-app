import { PartialType } from '@nestjs/mapped-types';
import { CreateBiddingPostMediaDto } from './create-bidding-post-media.dto';

export class UpdateBiddingPostMediaDto extends PartialType(CreateBiddingPostMediaDto) {}
