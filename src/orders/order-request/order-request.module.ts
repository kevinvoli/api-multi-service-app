import { Module } from '@nestjs/common';
import { OrderRequestService } from './order-request.service';
import { OrderRequestController } from './order-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRequest } from './entities/order-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderRequest])],
  controllers: [OrderRequestController],
  providers: [OrderRequestService],
  exports: [TypeOrmModule],
})
export class OrderRequestModule {}
