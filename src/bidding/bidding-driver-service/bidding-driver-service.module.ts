import { Module } from '@nestjs/common';
import { BiddingDriverServiceService } from './bidding-driver-service.service';
import { BiddingDriverServiceController } from './bidding-driver-service.controller';
import { BiddingDriverService } from './entities/bidding-driver-service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingDriverService])],
  controllers: [BiddingDriverServiceController],
  providers: [BiddingDriverServiceService],
})
export class BiddingDriverServiceModule {}
