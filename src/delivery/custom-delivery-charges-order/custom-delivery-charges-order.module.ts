import { Module } from '@nestjs/common';
import { CustomDeliveryChargesOrderService } from './custom-delivery-charges-order.service';
import { CustomDeliveryChargesOrderController } from './custom-delivery-charges-order.controller';

@Module({
  controllers: [CustomDeliveryChargesOrderController],
  providers: [CustomDeliveryChargesOrderService],
})
export class CustomDeliveryChargesOrderModule {}
