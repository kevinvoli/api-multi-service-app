import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdvertiseBanners } from './entities/advertise-banner.entity';
import { CreateAdvertiseBannerDto } from './dto/create-advertise-banner.dto';
import { UpdateAdvertiseBannerDto } from './dto/update-advertise-banner.dto';

@Injectable()
export class AdvertiseBannersService {
  constructor(
    @InjectRepository(AdvertiseBanners)
    private readonly repository: Repository<AdvertiseBanners>,
  ) {}

  async create(createDto: CreateAdvertiseBannerDto): Promise<AdvertiseBanners> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AdvertiseBanners[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AdvertiseBanners> {
    const entity = await this.repository.findOneBy({ iAdvertBannerId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAdvertiseBannerDto): Promise<AdvertiseBanners> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
