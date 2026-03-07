import { Module } from '@nestjs/common';
import { ConfigurationsPaymentLog } from './entities/configurations-payment-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsPaymentLogService } from './configurations-payment-log.service';
import { ConfigurationsPaymentLogController } from './configurations-payment-log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigurationsPaymentLog])],
  controllers: [ConfigurationsPaymentLogController],
  providers: [ConfigurationsPaymentLogService],
  exports: [TypeOrmModule.forFeature([ConfigurationsPaymentLog])],
})
export class ConfigurationsPaymentLogModule {}
