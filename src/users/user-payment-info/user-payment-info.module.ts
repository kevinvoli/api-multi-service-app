import { Module } from '@nestjs/common';
import { UserPaymentInfoService } from './user-payment-info.service';
import { UserPaymentInfoController } from './user-payment-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPaymentInfo } from './entities/user-payment-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPaymentInfo])],
  controllers: [UserPaymentInfoController],
  providers: [UserPaymentInfoService],
})
export class UserPaymentInfoModule {}
