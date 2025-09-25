import { Injectable } from '@nestjs/common';
import { CreateBannerImpressionDto } from './dto/create-banner-impression.dto';
import { UpdateBannerImpressionDto } from './dto/update-banner-impression.dto';

@Injectable()
export class BannerImpressionService {
  create(createBannerImpressionDto: CreateBannerImpressionDto) {
    return 'This action adds a new bannerImpression';
  }

  findAll() {
    return `This action returns all bannerImpression`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bannerImpression`;
  }

  update(id: number, updateBannerImpressionDto: UpdateBannerImpressionDto) {
    return `This action updates a #${id} bannerImpression`;
  }

  remove(id: number) {
    return `This action removes a #${id} bannerImpression`;
  }
}
