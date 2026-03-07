import { Module } from '@nestjs/common';
import { OrderDeliveryChargeDetails } from './entities/order-delivery-charge-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDeliveryChargeDetailsService } from './order-delivery-charge-details.service';
import { OrderDeliveryChargeDetailsController } from './order-delivery-charge-details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDeliveryChargeDetails])],
  controllers: [OrderDeliveryChargeDetailsController],
  providers: [OrderDeliveryChargeDetailsService],
  exports: [TypeOrmModule.forFeature([OrderDeliveryChargeDetails])],
})
export class OrderDeliveryChargeDetailsModule {}
