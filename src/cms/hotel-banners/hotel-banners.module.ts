import { Module } from '@nestjs/common';
import { HotelBannersService } from './hotel-banners.service';
import { HotelBannersController } from './hotel-banners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelBanners } from './entities/hotel-banner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HotelBanners])],
  controllers: [HotelBannersController],
  providers: [HotelBannersService],
})
export class HotelBannersModule {}
