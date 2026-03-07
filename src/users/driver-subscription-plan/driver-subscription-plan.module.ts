import { Module } from '@nestjs/common';
import { DriverSubscriptionPlan } from './entities/driver-subscription-plan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverSubscriptionPlanService } from './driver-subscription-plan.service';
import { DriverSubscriptionPlanController } from './driver-subscription-plan.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverSubscriptionPlan])],
  controllers: [DriverSubscriptionPlanController],
  providers: [DriverSubscriptionPlanService],
  exports: [TypeOrmModule.forFeature([DriverSubscriptionPlan])],
})
export class DriverSubscriptionPlanModule {}
