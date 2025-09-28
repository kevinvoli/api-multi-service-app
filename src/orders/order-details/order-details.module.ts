import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from './entities/order-detail.entity';
import { OrdersDetails } from './entities/order_detail.entiy';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetails,OrdersDetails])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
  exports: [TypeOrmModule],
})
export class OrderDetailsModule {}
