import { Module } from '@nestjs/common';
import { UserReferrerTransaction } from './entities/user-referrer-transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserReferrerTransactionService } from './user-referrer-transaction.service';
import { UserReferrerTransactionController } from './user-referrer-transaction.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserReferrerTransaction])],
  controllers: [UserReferrerTransactionController],
  providers: [UserReferrerTransactionService],
  exports: [TypeOrmModule.forFeature([UserReferrerTransaction])],
})
export class UserReferrerTransactionModule {}
