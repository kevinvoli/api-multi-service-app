import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverBiddingRequestDto } from './create-driver-bidding-request.dto';

export class UpdateDriverBiddingRequestDto extends PartialType(CreateDriverBiddingRequestDto) {}
