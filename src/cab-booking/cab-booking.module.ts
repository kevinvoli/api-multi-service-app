import { Module } from '@nestjs/common';
import { CabBookingService } from './cab-booking.service';
import { CabBookingController } from './cab-booking.controller';

@Module({
  controllers: [CabBookingController],
  providers: [CabBookingService],
})
export class CabBookingModule {}
