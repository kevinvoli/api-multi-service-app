import { Injectable } from '@nestjs/common';
import { CreateStoreWiseBannerDto } from './dto/create-store-wise-banner.dto';
import { UpdateStoreWiseBannerDto } from './dto/update-store-wise-banner.dto';

@Injectable()
export class StoreWiseBannersService {
  create(createStoreWiseBannerDto: CreateStoreWiseBannerDto) {
    return 'This action adds a new storeWiseBanner';
  }

  findAll() {
    return `This action returns all storeWiseBanners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeWiseBanner`;
  }

  update(id: number, updateStoreWiseBannerDto: UpdateStoreWiseBannerDto) {
    return `This action updates a #${id} storeWiseBanner`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeWiseBanner`;
  }
}
