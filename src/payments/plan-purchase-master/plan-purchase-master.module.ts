import { Module } from '@nestjs/common';
import { PlanPurchaseMasterService } from './plan-purchase-master.service';
import { PlanPurchaseMasterController } from './plan-purchase-master.controller';

@Module({
  controllers: [PlanPurchaseMasterController],
  providers: [PlanPurchaseMasterService],
})
export class PlanPurchaseMasterModule {}
