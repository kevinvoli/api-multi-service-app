import { Module } from '@nestjs/common';
import { OrderStatusLogsService } from './order-status-logs.service';
import { OrderStatusLogsController } from './order-status-logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStatusLogs } from './entities/order-status-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderStatusLogs])],
  controllers: [OrderStatusLogsController],
  providers: [OrderStatusLogsService],
  exports: [TypeOrmModule],
})
export class OrderStatusLogsModule {}
