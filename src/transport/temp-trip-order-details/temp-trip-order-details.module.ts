import { Module } from '@nestjs/common';
import { TempTripOrderDetailsService } from './temp-trip-order-details.service';
import { TempTripOrderDetailsController } from './temp-trip-order-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TempTripOrderDetails } from './entities/temp-trip-order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TempTripOrderDetails])],
  controllers: [TempTripOrderDetailsController],
  providers: [TempTripOrderDetailsService],
})
export class TempTripOrderDetailsModule {}
