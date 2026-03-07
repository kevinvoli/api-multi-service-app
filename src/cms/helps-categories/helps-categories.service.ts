import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HelpsCategories } from './entities/helps-category.entity';
import { CreateHelpsCategoryDto } from './dto/create-helps-category.dto';
import { UpdateHelpsCategoryDto } from './dto/update-helps-category.dto';

@Injectable()
export class HelpsCategoriesService {
  constructor(
    @InjectRepository(HelpsCategories)
    private readonly repository: Repository<HelpsCategories>,
  ) {}

  async create(createDto: CreateHelpsCategoryDto): Promise<HelpsCategories> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<HelpsCategories[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<HelpsCategories> {
    const entity = await this.repository.findOneBy({ iHelpscategoryId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateHelpsCategoryDto): Promise<HelpsCategories> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
