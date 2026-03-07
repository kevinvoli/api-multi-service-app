import { Module } from '@nestjs/common';
import { OrderDriverLog } from './entities/order-driver-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDriverLogService } from './order-driver-log.service';
import { OrderDriverLogController } from './order-driver-log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDriverLog])],
  controllers: [OrderDriverLogController],
  providers: [OrderDriverLogService],
  exports: [TypeOrmModule.forFeature([OrderDriverLog])],
})
export class OrderDriverLogModule {}
