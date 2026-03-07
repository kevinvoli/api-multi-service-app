import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentModelUserLogService } from './payment-model-user-log.service';
import { PaymentModelUserLogController } from './payment-model-user-log.controller';

import { PaymentModeUserLog } from './entities/payment-model-user-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentModeUserLog])],
  controllers: [PaymentModelUserLogController],
  providers: [PaymentModelUserLogService],
  exports: [TypeOrmModule.forFeature([PaymentModeUserLog])],
})
export class PaymentModelUserLogModule {}
