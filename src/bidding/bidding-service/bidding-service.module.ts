import { Module } from '@nestjs/common';
import { BiddingServiceService } from './bidding-service.service';
import { BiddingServiceController } from './bidding-service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingService } from './entities/bidding-service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingService])],
  controllers: [BiddingServiceController],
  providers: [BiddingServiceService],
})
export class BiddingServiceModule {}
