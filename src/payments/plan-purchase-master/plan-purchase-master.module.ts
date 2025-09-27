import { Module } from '@nestjs/common';
import { PlanPurchaseMasterService } from './plan-purchase-master.service';
import { PlanPurchaseMasterController } from './plan-purchase-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanPurchaseMaster } from './entities/plan-purchase-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanPurchaseMaster])],
  controllers: [PlanPurchaseMasterController],
  providers: [PlanPurchaseMasterService],
})
export class PlanPurchaseMasterModule {}