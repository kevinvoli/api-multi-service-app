import { Module } from '@nestjs/common';
import { PaymentRequestsService } from './payment-requests.service';
import { PaymentRequestsController } from './payment-requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentRequests } from './entities/payment-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentRequests])],
  controllers: [PaymentRequestsController],
  providers: [PaymentRequestsService],
})
export class PaymentRequestsModule {}