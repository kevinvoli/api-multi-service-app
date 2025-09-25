import { Module } from '@nestjs/common';
import { HotelBannersService } from './hotel-banners.service';
import { HotelBannersController } from './hotel-banners.controller';

@Module({
  controllers: [HotelBannersController],
  providers: [HotelBannersService],
})
export class HotelBannersModule {}
