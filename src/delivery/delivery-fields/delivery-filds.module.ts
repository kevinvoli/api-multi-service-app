import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryFildsService } from './delivery-filds.service';
import { DeliveryFildsController } from './delivery-filds.controller';

import { DeliveryFields } from './entities/delivery-field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryFields])],
  controllers: [DeliveryFildsController],
  providers: [DeliveryFildsService],
  exports: [TypeOrmModule.forFeature([DeliveryFields])],
})
export class DeliveryFildsModule {}
