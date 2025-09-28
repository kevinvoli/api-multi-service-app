import { Module } from '@nestjs/common';
import { DriverSubscriptionPlanService } from './driver-subscription-plan.service';
import { DriverSubscriptionPlanController } from './driver-subscription-plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverSubscriptionPlan } from './entities/driver-subscription-plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverSubscriptionPlan])],
  controllers: [DriverSubscriptionPlanController],
  providers: [DriverSubscriptionPlanService],
})
export class DriverSubscriptionPlanModule {}
