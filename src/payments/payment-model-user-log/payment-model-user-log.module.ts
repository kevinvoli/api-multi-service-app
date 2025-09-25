import { Module } from '@nestjs/common';
import { PaymentModelUserLogService } from './payment-model-user-log.service';
import { PaymentModelUserLogController } from './payment-model-user-log.controller';

@Module({
  controllers: [PaymentModelUserLogController],
  providers: [PaymentModelUserLogService],
})
export class PaymentModelUserLogModule {}
