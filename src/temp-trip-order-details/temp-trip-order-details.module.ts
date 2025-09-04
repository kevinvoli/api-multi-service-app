import { Module } from '@nestjs/common';
import { TempTripOrderDetailsService } from './temp-trip-order-details.service';
import { TempTripOrderDetailsController } from './temp-trip-order-details.controller';

@Module({
  controllers: [TempTripOrderDetailsController],
  providers: [TempTripOrderDetailsService],
})
export class TempTripOrderDetailsModule {}
