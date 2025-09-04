import { PartialType } from '@nestjs/mapped-types';
import { CreateBiddingServiceDto } from './create-bidding-service.dto';

export class UpdateBiddingServiceDto extends PartialType(CreateBiddingServiceDto) {}
