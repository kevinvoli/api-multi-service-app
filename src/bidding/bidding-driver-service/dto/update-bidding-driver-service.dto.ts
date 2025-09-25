import { PartialType } from '@nestjs/mapped-types';
import { CreateBiddingDriverServiceDto } from './create-bidding-driver-service.dto';

export class UpdateBiddingDriverServiceDto extends PartialType(CreateBiddingDriverServiceDto) {}
