import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HomeContent } from './entities/home-content.entity';
import { CreateHomeContentDto } from './dto/create-home-content.dto';
import { UpdateHomeContentDto } from './dto/update-home-content.dto';

@Injectable()
export class HomeContentService {
  constructor(
    @InjectRepository(HomeContent)
    private readonly repository: Repository<HomeContent>,
  ) {}

  async create(createDto: CreateHomeContentDto): Promise<HomeContent> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<HomeContent[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<HomeContent> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateHomeContentDto): Promise<HomeContent> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
