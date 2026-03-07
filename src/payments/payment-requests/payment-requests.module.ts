import { Module } from '@nestjs/common';
import { PaymentRequests } from './entities/payment-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentRequestsService } from './payment-requests.service';
import { PaymentRequestsController } from './payment-requests.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentRequests])],
  controllers: [PaymentRequestsController],
  providers: [PaymentRequestsService],
  exports: [TypeOrmModule.forFeature([PaymentRequests])],
})
export class PaymentRequestsModule {}
