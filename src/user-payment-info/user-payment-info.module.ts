import { Module } from '@nestjs/common';
import { UserPaymentInfoService } from './user-payment-info.service';
import { UserPaymentInfoController } from './user-payment-info.controller';

@Module({
  controllers: [UserPaymentInfoController],
  providers: [UserPaymentInfoService],
})
export class UserPaymentInfoModule {}
