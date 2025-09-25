import { Module } from '@nestjs/common';
import { ConfigurationsPaymentsService } from './configurations-payments.service';
import { ConfigurationsPaymentsController } from './configurations-payments.controller';

@Module({
  controllers: [ConfigurationsPaymentsController],
  providers: [ConfigurationsPaymentsService],
})
export class ConfigurationsPaymentsModule {}
