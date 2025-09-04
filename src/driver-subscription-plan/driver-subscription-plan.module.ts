import { Module } from '@nestjs/common';
import { DriverSubscriptionPlanService } from './driver-subscription-plan.service';
import { DriverSubscriptionPlanController } from './driver-subscription-plan.controller';

@Module({
  controllers: [DriverSubscriptionPlanController],
  providers: [DriverSubscriptionPlanService],
})
export class DriverSubscriptionPlanModule {}
