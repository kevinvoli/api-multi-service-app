import { Module } from '@nestjs/common';
import { AdvertiseBannersService } from './advertise-banners.service';
import { AdvertiseBannersController } from './advertise-banners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertiseBanners } from './entities/advertise-banner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdvertiseBanners])],
  controllers: [AdvertiseBannersController],
  providers: [AdvertiseBannersService],
})
export class AdvertiseBannersModule {}