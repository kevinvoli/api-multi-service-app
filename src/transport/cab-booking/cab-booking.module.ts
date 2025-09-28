import { Module } from '@nestjs/common';
import { CabBookingService } from './cab-booking.service';
import { CabBookingController } from './cab-booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabBooking } from './entities/cab-booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CabBooking])],
  controllers: [CabBookingController],
  providers: [CabBookingService],
})
export class CabBookingModule {}
