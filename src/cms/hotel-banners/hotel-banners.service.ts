import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HotelBanners } from './entities/hotel-banner.entity';
import { CreateHotelBannerDto } from './dto/create-hotel-banner.dto';
import { UpdateHotelBannerDto } from './dto/update-hotel-banner.dto';

@Injectable()
export class HotelBannersService {
  constructor(
    @InjectRepository(HotelBanners)
    private readonly repository: Repository<HotelBanners>,
  ) {}

  async create(createDto: CreateHotelBannerDto): Promise<HotelBanners> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<HotelBanners[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<HotelBanners> {
    const entity = await this.repository.findOneBy({ iHotelBannerId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateHotelBannerDto): Promise<HotelBanners> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
