import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabBookingService } from './cab-booking.service';
import { CabBookingController } from './cab-booking.controller';
import { CabBooking } from './entities/cab-booking.entity';
import { RegisterUser } from '../../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../../users/register-driver/entities/register-driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CabBooking, RegisterUser, RegisterDriver])],
  controllers: [CabBookingController],
  providers: [CabBookingService],
  exports: [CabBookingService, TypeOrmModule.forFeature([CabBooking])],
})
export class CabBookingModule {}
