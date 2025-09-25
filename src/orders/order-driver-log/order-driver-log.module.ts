import { Module } from '@nestjs/common';
import { OrderDriverLogService } from './order-driver-log.service';
import { OrderDriverLogController } from './order-driver-log.controller';

@Module({
  controllers: [OrderDriverLogController],
  providers: [OrderDriverLogService],
})
export class OrderDriverLogModule {}
