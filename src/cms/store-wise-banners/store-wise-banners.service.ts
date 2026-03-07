import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreWiseBanners } from './entities/store-wise-banner.entity';
import { CreateStoreWiseBannerDto } from './dto/create-store-wise-banner.dto';
import { UpdateStoreWiseBannerDto } from './dto/update-store-wise-banner.dto';

@Injectable()
export class StoreWiseBannersService {
  constructor(
    @InjectRepository(StoreWiseBanners)
    private readonly repository: Repository<StoreWiseBanners>,
  ) {}

  async create(createDto: CreateStoreWiseBannerDto): Promise<StoreWiseBanners> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<StoreWiseBanners[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<StoreWiseBanners> {
    const entity = await this.repository.findOneBy({ iBannerId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateStoreWiseBannerDto): Promise<StoreWiseBanners> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
