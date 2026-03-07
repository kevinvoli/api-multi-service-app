import { Module } from '@nestjs/common';
import { TempTripOrderDetails } from './entities/temp-trip-order-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TempTripOrderDetailsService } from './temp-trip-order-details.service';
import { TempTripOrderDetailsController } from './temp-trip-order-details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TempTripOrderDetails])],
  controllers: [TempTripOrderDetailsController],
  providers: [TempTripOrderDetailsService],
  exports: [TypeOrmModule.forFeature([TempTripOrderDetails])],
})
export class TempTripOrderDetailsModule {}
