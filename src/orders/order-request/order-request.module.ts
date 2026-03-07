import { Module } from '@nestjs/common';
import { OrderRequest } from './entities/order-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRequestService } from './order-request.service';
import { OrderRequestController } from './order-request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderRequest])],
  controllers: [OrderRequestController],
  providers: [OrderRequestService],
  exports: [TypeOrmModule.forFeature([OrderRequest])],
})
export class OrderRequestModule {}
