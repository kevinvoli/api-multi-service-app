import { Module } from '@nestjs/common';
import { BiddingService } from './entities/bidding-service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiddingServiceService } from './bidding-service.service';
import { BiddingServiceController } from './bidding-service.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BiddingService])],
  controllers: [BiddingServiceController],
  providers: [BiddingServiceService],
  exports: [TypeOrmModule.forFeature([BiddingService])],
})
export class BiddingServiceModule {}
