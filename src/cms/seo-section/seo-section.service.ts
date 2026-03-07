import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeoSections } from './entities/seo-section.entity';
import { CreateSeoSectionDto } from './dto/create-seo-section.dto';
import { UpdateSeoSectionDto } from './dto/update-seo-section.dto';

@Injectable()
export class SeoSectionService {
  constructor(
    @InjectRepository(SeoSections)
    private readonly repository: Repository<SeoSections>,
  ) {}

  async create(createDto: CreateSeoSectionDto): Promise<SeoSections> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<SeoSections[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<SeoSections> {
    const entity = await this.repository.findOneBy({ iId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateSeoSectionDto): Promise<SeoSections> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
