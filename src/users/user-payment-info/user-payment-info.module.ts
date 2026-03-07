import { Module } from '@nestjs/common';
import { UserPaymentInfo } from './entities/user-payment-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPaymentInfoService } from './user-payment-info.service';
import { UserPaymentInfoController } from './user-payment-info.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserPaymentInfo])],
  controllers: [UserPaymentInfoController],
  providers: [UserPaymentInfoService],
  exports: [TypeOrmModule.forFeature([UserPaymentInfo])],
})
export class UserPaymentInfoModule {}
