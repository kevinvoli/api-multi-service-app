import { Module } from '@nestjs/common';
import { OrderStatusLogs } from './entities/order-status-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStatusLogsService } from './order-status-logs.service';
import { OrderStatusLogsController } from './order-status-logs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderStatusLogs])],
  controllers: [OrderStatusLogsController],
  providers: [OrderStatusLogsService],
  exports: [TypeOrmModule.forFeature([OrderStatusLogs])],
})
export class OrderStatusLogsModule {}
