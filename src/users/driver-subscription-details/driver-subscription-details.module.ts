import { Module } from '@nestjs/common';
import { DriverSubscriptionDetailsService } from './driver-subscription-details.service';
import { DriverSubscriptionDetailsController } from './driver-subscription-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverSubscriptionDetails } from './entities/driver-subscription-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverSubscriptionDetails])],
  controllers: [DriverSubscriptionDetailsController],
  providers: [DriverSubscriptionDetailsService],
})
export class DriverSubscriptionDetailsModule {}
