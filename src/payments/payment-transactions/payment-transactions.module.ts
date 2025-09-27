import { Module } from '@nestjs/common';
import { PaymentTransactionsService } from './payment-transactions.service';
import { PaymentTransactionsController } from './payment-transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentTransactions } from './entities/payment-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentTransactions])],
  controllers: [PaymentTransactionsController],
  providers: [PaymentTransactionsService],
})
export class PaymentTransactionsModule {}