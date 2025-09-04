import { Injectable } from '@nestjs/common';
import { CreateHotelBannerDto } from './dto/create-hotel-banner.dto';
import { UpdateHotelBannerDto } from './dto/update-hotel-banner.dto';

@Injectable()
export class HotelBannersService {
  create(createHotelBannerDto: CreateHotelBannerDto) {
    return 'This action adds a new hotelBanner';
  }

  findAll() {
    return `This action returns all hotelBanners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotelBanner`;
  }

  update(id: number, updateHotelBannerDto: UpdateHotelBannerDto) {
    return `This action updates a #${id} hotelBanner`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotelBanner`;
  }
}
