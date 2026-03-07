import { Module } from '@nestjs/common';
import { ConfigurationsPayment } from './entities/configurations-payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsPaymentsService } from './configurations-payments.service';
import { ConfigurationsPaymentsController } from './configurations-payments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigurationsPayment])],
  controllers: [ConfigurationsPaymentsController],
  providers: [ConfigurationsPaymentsService],
  exports: [TypeOrmModule.forFeature([ConfigurationsPayment])],
})
export class ConfigurationsPaymentsModule {}
