import { Module } from '@nestjs/common';
import { WithdrawRequests } from './entities/withdraw-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WithdrawRequestsService } from './withdraw-requests.service';
import { WithdrawRequestsController } from './withdraw-requests.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WithdrawRequests])],
  controllers: [WithdrawRequestsController],
  providers: [WithdrawRequestsService],
  exports: [TypeOrmModule.forFeature([WithdrawRequests])],
})
export class WithdrawRequestsModule {}
