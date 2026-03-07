import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BannerImpression } from './entities/banner-impression.entity';
import { CreateBannerImpressionDto } from './dto/create-banner-impression.dto';
import { UpdateBannerImpressionDto } from './dto/update-banner-impression.dto';

@Injectable()
export class BannerImpressionService {
  constructor(
    @InjectRepository(BannerImpression)
    private readonly repository: Repository<BannerImpression>,
  ) {}

  async create(createDto: CreateBannerImpressionDto): Promise<BannerImpression> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<BannerImpression[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<BannerImpression> {
    const entity = await this.repository.findOneBy({ iBannerImpLog: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateBannerImpressionDto): Promise<BannerImpression> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
