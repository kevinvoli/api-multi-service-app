import { PartialType } from '@nestjs/mapped-types';
import { CreateBiddingDriverRequestDto } from './create-bidding-driver-request.dto';

export class UpdateBiddingDriverRequestDto extends PartialType(CreateBiddingDriverRequestDto) {}
