import { Module } from '@nestjs/common';
import { OrderDriverLogService } from './order-driver-log.service';
import { OrderDriverLogController } from './order-driver-log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDriverLog } from './entities/order-driver-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDriverLog])],
  controllers: [OrderDriverLogController],
  providers: [OrderDriverLogService],
  exports: [TypeOrmModule],
})
export class OrderDriverLogModule {}
