import { Injectable } from '@nestjs/common';
import { CreateAdvertiseBannerDto } from './dto/create-advertise-banner.dto';
import { UpdateAdvertiseBannerDto } from './dto/update-advertise-banner.dto';

@Injectable()
export class AdvertiseBannersService {
  create(createAdvertiseBannerDto: CreateAdvertiseBannerDto) {
    return 'This action adds a new advertiseBanner';
  }

  findAll() {
    return `This action returns all advertiseBanners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} advertiseBanner`;
  }

  update(id: number, updateAdvertiseBannerDto: UpdateAdvertiseBannerDto) {
    return `This action updates a #${id} advertiseBanner`;
  }

  remove(id: number) {
    return `This action removes a #${id} advertiseBanner`;
  }
}
