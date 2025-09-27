import { Module } from '@nestjs/common';
import { ConfigurationsPaymentsService } from './configurations-payments.service';
import { ConfigurationsPaymentsController } from './configurations-payments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsPayment } from './entities/configurations-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigurationsPayment])],
  controllers: [ConfigurationsPaymentsController],
  providers: [ConfigurationsPaymentsService],
})
export class ConfigurationsPaymentsModule {}