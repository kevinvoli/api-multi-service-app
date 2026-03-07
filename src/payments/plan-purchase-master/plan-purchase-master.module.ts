import { Module } from '@nestjs/common';
import { PlanPurchaseMaster } from './entities/plan-purchase-master.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanPurchaseMasterService } from './plan-purchase-master.service';
import { PlanPurchaseMasterController } from './plan-purchase-master.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PlanPurchaseMaster])],
  controllers: [PlanPurchaseMasterController],
  providers: [PlanPurchaseMasterService],
  exports: [TypeOrmModule.forFeature([PlanPurchaseMaster])],
})
export class PlanPurchaseMasterModule {}
