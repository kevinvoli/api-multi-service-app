import { Module } from '@nestjs/common';
import { DriverBiddingRequestService } from './driver-bidding-request.service';
import { DriverBiddingRequestController } from './driver-bidding-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverBiddingRequest } from './entities/driver-bidding-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverBiddingRequest])],
  controllers: [DriverBiddingRequestController],
  providers: [DriverBiddingRequestService],
})
export class DriverBiddingRequestModule {}