import { Module } from '@nestjs/common';
import { DeliveryFildsService } from './delivery-filds.service';
import { DeliveryFildsController } from './delivery-filds.controller';

@Module({
  controllers: [DeliveryFildsController],
  providers: [DeliveryFildsService],
})
export class DeliveryFildsModule {}
