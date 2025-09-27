import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { Banners } from './entities/banner.entity';

@Injectable()
export class BannersService {
  constructor(
    @InjectRepository(Banners)
    private readonly bannersRepository: Repository<Banners>,
  ) {}

  async create(createBannerDto: CreateBannerDto): Promise<Banners> {
    const newBanner = this.bannersRepository.create(createBannerDto);
    return this.bannersRepository.save(newBanner);
  }

  async findAll(): Promise<Banners[]> {
    return this.bannersRepository.find();
  }

  async findOne(id: number): Promise<Banners> {
    const banner = await this.bannersRepository.findOne({ where: { iBannerId: id } });
    if (!banner) {
      throw new NotFoundException(`Banner with ID #${id} not found`);
    }
    return banner;
  }

  async update(id: number, updateBannerDto: UpdateBannerDto): Promise<Banners> {
    const banner = await this.findOne(id);
    this.bannersRepository.merge(banner, updateBannerDto);
    return this.bannersRepository.save(banner);
  }

  async remove(id: number): Promise<void> {
    const result = await this.bannersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Banner with ID #${id} not found`);
    }
  }
}