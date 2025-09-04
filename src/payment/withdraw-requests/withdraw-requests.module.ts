import { Module } from '@nestjs/common';
import { WithdrawRequestsService } from './withdraw-requests.service';
import { WithdrawRequestsController } from './withdraw-requests.controller';

@Module({
  controllers: [WithdrawRequestsController],
  providers: [WithdrawRequestsService],
})
export class WithdrawRequestsModule {}
