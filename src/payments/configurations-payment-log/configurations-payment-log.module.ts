import { Module } from '@nestjs/common';
import { ConfigurationsPaymentLogService } from './configurations-payment-log.service';
import { ConfigurationsPaymentLogController } from './configurations-payment-log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsPaymentLog } from './entities/configurations-payment-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigurationsPaymentLog])],
  controllers: [ConfigurationsPaymentLogController],
  providers: [ConfigurationsPaymentLogService],
})
export class ConfigurationsPaymentLogModule {}