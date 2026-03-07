import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FareController } from './fare.controller';
import { FareService } from './fare.service';
import { VehicleType } from '../vehicles/vehicle-type/entities/vehicle-type.entity';
import { Coupon } from '../payments/coupon/entities/coupon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleType, Coupon])],
  controllers: [FareController],
  providers: [FareService],
  exports: [FareService],
})
export class FareModule {}
