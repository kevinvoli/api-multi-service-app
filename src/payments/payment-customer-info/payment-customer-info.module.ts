import { Module } from '@nestjs/common';
import { PaymentCustomerInfo } from './entities/payment-customer-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentCustomerInfoService } from './payment-customer-info.service';
import { PaymentCustomerInfoController } from './payment-customer-info.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentCustomerInfo])],
  controllers: [PaymentCustomerInfoController],
  providers: [PaymentCustomerInfoService],
  exports: [TypeOrmModule.forFeature([PaymentCustomerInfo])],
})
export class PaymentCustomerInfoModule {}
