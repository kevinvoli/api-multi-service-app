import { PartialType } from '@nestjs/mapped-types';
import { CreateBiddingPostDto } from './create-bidding-post.dto';

export class UpdateBiddingPostDto extends PartialType(CreateBiddingPostDto) {}
