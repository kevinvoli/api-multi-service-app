import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHelpDetailCategoryDto } from './dto/create-help-detail-category.dto';
import { UpdateHelpDetailCategoryDto } from './dto/update-help-detail-category.dto';
import { HelpDetailCategories } from './entities/help-detail-category.entity';

@Injectable()
export class HelpDetailCategoriesService {
  constructor(
    @InjectRepository(HelpDetailCategories)
    private readonly helpDetailCategoriesRepository: Repository<HelpDetailCategories>,
  ) {}

  async create(createHelpDetailCategoryDto: CreateHelpDetailCategoryDto): Promise<HelpDetailCategories> {
    const newCategory = this.helpDetailCategoriesRepository.create(createHelpDetailCategoryDto);
    return this.helpDetailCategoriesRepository.save(newCategory);
  }

  async findAll(): Promise<HelpDetailCategories[]> {
    return this.helpDetailCategoriesRepository.find();
  }

  async findOne(id: number): Promise<HelpDetailCategories> {
    const category = await this.helpDetailCategoriesRepository.findOne({ where: { iHelpDetailCategoryId: id } });
    if (!category) {
      throw new NotFoundException(`Help Detail Category with ID #${id} not found`);
    }
    return category;
  }

  async update(id: number, updateHelpDetailCategoryDto: UpdateHelpDetailCategoryDto): Promise<HelpDetailCategories> {
    const category = await this.findOne(id);
    this.helpDetailCategoriesRepository.merge(category, updateHelpDetailCategoryDto);
    return this.helpDetailCategoriesRepository.save(category);
  }

  async remove(id: number): Promise<void> {
    const result = await this.helpDetailCategoriesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Help Detail Category with ID #${id} not found`);
    }
  }
}