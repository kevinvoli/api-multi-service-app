import { Module } from '@nestjs/common';
import { BiddingDriverRequest } from './entities/bidding-driver-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingDriverRequestService } from './bidding-driver-request.service';
import { BiddingDriverRequestController } from './bidding-driver-request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingDriverRequest])],
  controllers: [BiddingDriverRequestController],
  providers: [BiddingDriverRequestService],
  exports: [TypeOrmModule.forFeature([BiddingDriverRequest])],
})
export class BiddingDriverRequestModule {}
