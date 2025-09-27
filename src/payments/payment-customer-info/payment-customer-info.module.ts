import { Module } from '@nestjs/common';
import { PaymentCustomerInfoService } from './payment-customer-info.service';
import { PaymentCustomerInfoController } from './payment-customer-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentCustomerInfo } from './entities/payment-customer-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentCustomerInfo])],
  controllers: [PaymentCustomerInfoController],
  providers: [PaymentCustomerInfoService],
})
export class PaymentCustomerInfoModule {}