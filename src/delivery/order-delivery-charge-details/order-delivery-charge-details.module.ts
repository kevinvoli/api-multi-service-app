import { Module } from '@nestjs/common';
import { OrderDeliveryChargeDetailsService } from './order-delivery-charge-details.service';
import { OrderDeliveryChargeDetailsController } from './order-delivery-charge-details.controller';
import { OrderDeliveryChargeDetails } from './entities/order-delivery-charge-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDeliveryChargeDetails])],
  controllers: [OrderDeliveryChargeDetailsController],
  providers: [OrderDeliveryChargeDetailsService],
})
export class OrderDeliveryChargeDetailsModule {}
