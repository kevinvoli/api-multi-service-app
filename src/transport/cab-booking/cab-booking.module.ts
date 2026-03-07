import { Module } from '@nestjs/common';
import { CabBooking } from './entities/cab-booking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabBookingService } from './cab-booking.service';
import { CabBookingController } from './cab-booking.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CabBooking])],
  controllers: [CabBookingController],
  providers: [CabBookingService],
  exports: [TypeOrmModule.forFeature([CabBooking])],
})
export class CabBookingModule {}
