import { Module } from '@nestjs/common';
import { HotelBanners } from './entities/hotel-banner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelBannersService } from './hotel-banners.service';
import { HotelBannersController } from './hotel-banners.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HotelBanners])],
  controllers: [HotelBannersController],
  providers: [HotelBannersService],
  exports: [TypeOrmModule.forFeature([HotelBanners])],
})
export class HotelBannersModule {}
