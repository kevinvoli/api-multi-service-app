import { Module } from '@nestjs/common';
import { TripOutStandingAmountService } from './trip-out-standing-amount.service';
import { TripOutStandingAmountController } from './trip-out-standing-amount.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripOutstandingAmount } from './entities/trip-out-standing-amount.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripOutstandingAmount])],
  controllers: [TripOutStandingAmountController],
  providers: [TripOutStandingAmountService],
})
export class TripOutStandingAmountModule {}
