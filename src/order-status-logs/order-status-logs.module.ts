import { Module } from '@nestjs/common';
import { OrderStatusLogsService } from './order-status-logs.service';
import { OrderStatusLogsController } from './order-status-logs.controller';

@Module({
  controllers: [OrderStatusLogsController],
  providers: [OrderStatusLogsService],
})
export class OrderStatusLogsModule {}
