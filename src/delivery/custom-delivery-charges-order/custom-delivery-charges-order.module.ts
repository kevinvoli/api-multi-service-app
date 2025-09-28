import { Module } from '@nestjs/common';
import { CustomDeliveryChargesOrderService } from './custom-delivery-charges-order.service';
import { CustomDeliveryChargesOrderController } from './custom-delivery-charges-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomDeliveryChargesOrder } from './entities/custom-delivery-charges-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomDeliveryChargesOrder])],
  controllers: [CustomDeliveryChargesOrderController],
  providers: [CustomDeliveryChargesOrderService],
})
export class CustomDeliveryChargesOrderModule {}
