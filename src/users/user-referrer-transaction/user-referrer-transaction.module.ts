import { Module } from '@nestjs/common';
import { UserReferrerTransactionService } from './user-referrer-transaction.service';
import { UserReferrerTransactionController } from './user-referrer-transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserReferrerTransaction } from './entities/user-referrer-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserReferrerTransaction])],
  controllers: [UserReferrerTransactionController],
  providers: [UserReferrerTransactionService],
})
export class UserReferrerTransactionModule {}
