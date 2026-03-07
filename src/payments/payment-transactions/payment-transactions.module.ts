import { Module } from '@nestjs/common';
import { PaymentTransaction } from './entities/payment-transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentTransactionsService } from './payment-transactions.service';
import { PaymentTransactionsController } from './payment-transactions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentTransaction])],
  controllers: [PaymentTransactionsController],
  providers: [PaymentTransactionsService],
  exports: [TypeOrmModule.forFeature([PaymentTransaction])],
})
export class PaymentTransactionsModule {}
