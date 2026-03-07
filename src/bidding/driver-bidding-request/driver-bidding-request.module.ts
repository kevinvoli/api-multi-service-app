import { Module } from '@nestjs/common';
import { DriverBiddingRequest } from './entities/driver-bidding-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverBiddingRequestService } from './driver-bidding-request.service';
import { DriverBiddingRequestController } from './driver-bidding-request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverBiddingRequest])],
  controllers: [DriverBiddingRequestController],
  providers: [DriverBiddingRequestService],
  exports: [TypeOrmModule.forFeature([DriverBiddingRequest])],
})
export class DriverBiddingRequestModule {}
