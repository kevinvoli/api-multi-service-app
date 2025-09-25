import { Module } from '@nestjs/common';
import { AdvertiseBannersService } from './advertise-banners.service';
import { AdvertiseBannersController } from './advertise-banners.controller';

@Module({
  controllers: [AdvertiseBannersController],
  providers: [AdvertiseBannersService],
})
export class AdvertiseBannersModule {}
