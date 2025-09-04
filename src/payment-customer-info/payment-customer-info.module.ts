import { Module } from '@nestjs/common';
import { PaymentCustomerInfoService } from './payment-customer-info.service';
import { PaymentCustomerInfoController } from './payment-customer-info.controller';

@Module({
  controllers: [PaymentCustomerInfoController],
  providers: [PaymentCustomerInfoService],
})
export class PaymentCustomerInfoModule {}
