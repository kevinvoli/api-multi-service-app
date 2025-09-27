import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrderDriverLogModule } from './order-driver-log/order-driver-log.module';
import { OrderRequestModule } from './order-request/order-request.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { OrderStatusLogsModule } from './order-status-logs/order-status-logs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Orders]),
    OrderDetailsModule,
    OrderDriverLogModule,
    OrderRequestModule,
    OrderStatusModule,
    OrderStatusLogsModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [
    TypeOrmModule,
    OrderDetailsModule,
    OrderDriverLogModule,
    OrderRequestModule,
    OrderStatusModule,
    OrderStatusLogsModule,
  ],
})
export class OrdersModule {}