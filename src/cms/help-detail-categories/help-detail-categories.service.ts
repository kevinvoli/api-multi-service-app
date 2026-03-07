import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HelpDetailCategories } from './entities/help-detail-category.entity';
import { CreateHelpDetailCategoryDto } from './dto/create-help-detail-category.dto';
import { UpdateHelpDetailCategoryDto } from './dto/update-help-detail-category.dto';

@Injectable()
export class HelpDetailCategoriesService {
  constructor(
    @InjectRepository(HelpDetailCategories)
    private readonly repository: Repository<HelpDetailCategories>,
  ) {}

  async create(createDto: CreateHelpDetailCategoryDto): Promise<HelpDetailCategories> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<HelpDetailCategories[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<HelpDetailCategories> {
    const entity = await this.repository.findOneBy({ iHelpDetailCategoryId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateHelpDetailCategoryDto): Promise<HelpDetailCategories> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
