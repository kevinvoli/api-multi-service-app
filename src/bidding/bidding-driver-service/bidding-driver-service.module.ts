import { Module } from '@nestjs/common';
import { BiddingDriverService } from './entities/bidding-driver-service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingDriverServiceService } from './bidding-driver-service.service';
import { BiddingDriverServiceController } from './bidding-driver-service.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingDriverService])],
  controllers: [BiddingDriverServiceController],
  providers: [BiddingDriverServiceService],
  exports: [TypeOrmModule.forFeature([BiddingDriverService])],
})
export class BiddingDriverServiceModule {}
