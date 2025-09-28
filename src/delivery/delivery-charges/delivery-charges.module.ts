import { Module } from '@nestjs/common';
import { DeliveryChargesService } from './delivery-charges.service';
import { DeliveryChargesController } from './delivery-charges.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryCharges } from './entities/delivery-charge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryCharges])],
  controllers: [DeliveryChargesController],
  providers: [DeliveryChargesService],
})
export class DeliveryChargesModule {}
