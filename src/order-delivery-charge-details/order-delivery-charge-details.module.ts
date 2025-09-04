import { Module } from '@nestjs/common';
import { OrderDeliveryChargeDetailsService } from './order-delivery-charge-details.service';
import { OrderDeliveryChargeDetailsController } from './order-delivery-charge-details.controller';

@Module({
  controllers: [OrderDeliveryChargeDetailsController],
  providers: [OrderDeliveryChargeDetailsService],
})
export class OrderDeliveryChargeDetailsModule {}
