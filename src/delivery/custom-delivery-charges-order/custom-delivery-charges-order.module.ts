import { Module } from '@nestjs/common';
import { CustomDeliveryChargesOrder } from './entities/custom-delivery-charges-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomDeliveryChargesOrderService } from './custom-delivery-charges-order.service';
import { CustomDeliveryChargesOrderController } from './custom-delivery-charges-order.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CustomDeliveryChargesOrder])],
  controllers: [CustomDeliveryChargesOrderController],
  providers: [CustomDeliveryChargesOrderService],
  exports: [TypeOrmModule.forFeature([CustomDeliveryChargesOrder])],
})
export class CustomDeliveryChargesOrderModule {}
