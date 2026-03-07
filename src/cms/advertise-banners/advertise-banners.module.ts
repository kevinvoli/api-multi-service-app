import { Module } from '@nestjs/common';
import { AdvertiseBanners } from './entities/advertise-banner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertiseBannersService } from './advertise-banners.service';
import { AdvertiseBannersController } from './advertise-banners.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdvertiseBanners])],
  controllers: [AdvertiseBannersController],
  providers: [AdvertiseBannersService],
  exports: [TypeOrmModule.forFeature([AdvertiseBanners])],
})
export class AdvertiseBannersModule {}
