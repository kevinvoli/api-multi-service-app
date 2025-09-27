import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverBiddingRequestDto } from './create-driver-bidding-request.dto';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateDriverBiddingRequestDto extends PartialType(CreateDriverBiddingRequestDto) {
  @IsEnum(['Pending', 'Accepted', 'Reoffer', 'Decline', 'Closed'])
  @IsOptional()
  eStatus?: 'Pending' | 'Accepted' | 'Reoffer' | 'Decline' | 'Closed';

  @IsEnum(['Passenger', 'Driver'])
  @IsOptional()
  declineByUser?: 'Passenger' | 'Driver';

  @IsInt()
  @IsOptional()
  iCancelReasonId?: number;

  @IsString()
  @IsOptional()
  vCancelReason?: string;
}