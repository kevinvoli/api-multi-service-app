import { Module } from '@nestjs/common';
import { TripOutStandingAmountService } from './trip-out-standing-amount.service';
import { TripOutStandingAmountController } from './trip-out-standing-amount.controller';

@Module({
  controllers: [TripOutStandingAmountController],
  providers: [TripOutStandingAmountService],
})
export class TripOutStandingAmountModule {}
