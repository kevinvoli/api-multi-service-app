import { Module } from '@nestjs/common';
import { DeliveryChargesService } from './delivery-charges.service';
import { DeliveryChargesController } from './delivery-charges.controller';

@Module({
  controllers: [DeliveryChargesController],
  providers: [DeliveryChargesService],
})
export class DeliveryChargesModule {}
