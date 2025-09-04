import { Module } from '@nestjs/common';
import { DriverSubscriptionDetailsService } from './driver-subscription-details.service';
import { DriverSubscriptionDetailsController } from './driver-subscription-details.controller';

@Module({
  controllers: [DriverSubscriptionDetailsController],
  providers: [DriverSubscriptionDetailsService],
})
export class DriverSubscriptionDetailsModule {}
