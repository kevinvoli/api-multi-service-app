import { Module } from '@nestjs/common';
import { OrderStatus } from './entities/order-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStatusService } from './order-status.service';
import { OrderStatusController } from './order-status.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderStatus])],
  controllers: [OrderStatusController],
  providers: [OrderStatusService],
  exports: [TypeOrmModule.forFeature([OrderStatus])],
})
export class OrderStatusModule {}
