import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrderDriverLogModule } from './order-driver-log/order-driver-log.module';
import { OrderRequestModule } from './order-request/order-request.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { OrderStatusLogsModule } from './order-status-logs/order-status-logs.module';
import { Order } from './entities/order.entity'; // Import the Order entity
import { OrderDetail } from './entities/order-detail.entity'; // Import the OrderDetail entity
import { User } from '../users/entities/user.entity'; // Import User entity

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderDetail, User]), // Add User here
    OrderDetailsModule,
    OrderDriverLogModule,
    OrderRequestModule,
    OrderStatusModule,
    OrderStatusLogsModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [
    TypeOrmModule.forFeature([Order, OrderDetail, User]), // Export for other modules if needed
    OrderDetailsModule,
    OrderDriverLogModule,
    OrderRequestModule,
    OrderStatusModule,
    OrderStatusLogsModule,
  ],
})
export class OrdersModule {}