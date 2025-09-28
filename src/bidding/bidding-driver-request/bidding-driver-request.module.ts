import { Module } from '@nestjs/common';
import { BiddingDriverRequestService } from './bidding-driver-request.service';
import { BiddingDriverRequestController } from './bidding-driver-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingDriverRequest } from './entities/bidding-driver-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingDriverRequest])],
  controllers: [BiddingDriverRequestController],
  providers: [BiddingDriverRequestService],
})
export class BiddingDriverRequestModule {}
