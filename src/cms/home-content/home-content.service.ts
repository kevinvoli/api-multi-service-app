import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHomeContentDto } from './dto/create-home-content.dto';
import { UpdateHomeContentDto } from './dto/update-home-content.dto';
import { HomeContent } from './entities/home-content.entity';

@Injectable()
export class HomeContentService {
  constructor(
    @InjectRepository(HomeContent)
    private readonly homeContentRepository: Repository<HomeContent>,
  ) {}

  async create(createHomeContentDto: CreateHomeContentDto): Promise<HomeContent> {
    const newHomeContent = this.homeContentRepository.create(createHomeContentDto);
    return this.homeContentRepository.save(newHomeContent);
  }

  async findAll(): Promise<HomeContent[]> {
    return this.homeContentRepository.find();
  }

  async findOne(id: number): Promise<HomeContent> {
    const homeContent = await this.homeContentRepository.findOne({ where: { id: id } });
    if (!homeContent) {
      throw new NotFoundException(`Home content with ID #${id} not found`);
    }
    return homeContent;
  }

  async update(id: number, updateHomeContentDto: UpdateHomeContentDto): Promise<HomeContent> {
    const homeContent = await this.findOne(id);
    this.homeContentRepository.merge(homeContent, updateHomeContentDto);
    return this.homeContentRepository.save(homeContent);
  }

  async remove(id: number): Promise<void> {
    const result = await this.homeContentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Home content with ID #${id} not found`);
    }
  }
}