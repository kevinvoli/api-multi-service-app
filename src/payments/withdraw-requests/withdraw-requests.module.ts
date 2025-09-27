import { Module } from '@nestjs/common';
import { WithdrawRequestsService } from './withdraw-requests.service';
import { WithdrawRequestsController } from './withdraw-requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WithdrawRequests } from './entities/withdraw-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WithdrawRequests])],
  controllers: [WithdrawRequestsController],
  providers: [WithdrawRequestsService],
})
export class WithdrawRequestsModule {}