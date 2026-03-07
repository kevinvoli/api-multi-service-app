import { Module } from '@nestjs/common';
import { DeliveryCharges } from './entities/delivery-charge.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryChargesService } from './delivery-charges.service';
import { DeliveryChargesController } from './delivery-charges.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryCharges])],
  controllers: [DeliveryChargesController],
  providers: [DeliveryChargesService],
  exports: [TypeOrmModule.forFeature([DeliveryCharges])],
})
export class DeliveryChargesModule {}
