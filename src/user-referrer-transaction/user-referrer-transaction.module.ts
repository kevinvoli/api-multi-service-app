import { Module } from '@nestjs/common';
import { UserReferrerTransactionService } from './user-referrer-transaction.service';
import { UserReferrerTransactionController } from './user-referrer-transaction.controller';

@Module({
  controllers: [UserReferrerTransactionController],
  providers: [UserReferrerTransactionService],
})
export class UserReferrerTransactionModule {}
