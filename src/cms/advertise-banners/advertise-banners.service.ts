import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdvertiseBannerDto } from './dto/create-advertise-banner.dto';
import { UpdateAdvertiseBannerDto } from './dto/update-advertise-banner.dto';
import { AdvertiseBanners } from './entities/advertise-banner.entity';

@Injectable()
export class AdvertiseBannersService {
  constructor(
    @InjectRepository(AdvertiseBanners)
    private readonly advertiseBannersRepository: Repository<AdvertiseBanners>,
  ) {}

  async create(createAdvertiseBannerDto: CreateAdvertiseBannerDto): Promise<AdvertiseBanners> {
    const newBanner = this.advertiseBannersRepository.create(createAdvertiseBannerDto);
    return this.advertiseBannersRepository.save(newBanner);
  }

  async findAll(): Promise<AdvertiseBanners[]> {
    return this.advertiseBannersRepository.find();
  }

  async findOne(id: number): Promise<AdvertiseBanners> {
    const banner = await this.advertiseBannersRepository.findOne({ where: { iAdvertBannerId: id } });
    if (!banner) {
      throw new NotFoundException(`Advertise Banner with ID #${id} not found`);
    }
    return banner;
  }

  async update(id: number, updateAdvertiseBannerDto: UpdateAdvertiseBannerDto): Promise<AdvertiseBanners> {
    const banner = await this.findOne(id);
    this.advertiseBannersRepository.merge(banner, updateAdvertiseBannerDto);
    return this.advertiseBannersRepository.save(banner);
  }

  async remove(id: number): Promise<void> {
    const result = await this.advertiseBannersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Advertise Banner with ID #${id} not found`);
    }
  }
}