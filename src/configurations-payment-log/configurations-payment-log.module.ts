import { Module } from '@nestjs/common';
import { ConfigurationsPaymentLogService } from './configurations-payment-log.service';
import { ConfigurationsPaymentLogController } from './configurations-payment-log.controller';

@Module({
  controllers: [ConfigurationsPaymentLogController],
  providers: [ConfigurationsPaymentLogService],
})
export class ConfigurationsPaymentLogModule {}
