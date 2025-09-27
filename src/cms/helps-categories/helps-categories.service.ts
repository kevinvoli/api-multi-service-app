import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHelpsCategoryDto } from './dto/create-helps-category.dto';
import { UpdateHelpsCategoryDto } from './dto/update-helps-category.dto';
import { HelpsCategories } from './entities/helps-category.entity';

@Injectable()
export class HelpsCategoriesService {
  constructor(
    @InjectRepository(HelpsCategories)
    private readonly helpsCategoriesRepository: Repository<HelpsCategories>,
  ) {}

  async create(createHelpsCategoryDto: CreateHelpsCategoryDto): Promise<HelpsCategories> {
    const newCategory = this.helpsCategoriesRepository.create(createHelpsCategoryDto);
    return this.helpsCategoriesRepository.save(newCategory);
  }

  async findAll(): Promise<HelpsCategories[]> {
    return this.helpsCategoriesRepository.find();
  }

  async findOne(id: number): Promise<HelpsCategories> {
    const category = await this.helpsCategoriesRepository.findOne({ where: { iHelpscategoryId: id } });
    if (!category) {
      throw new NotFoundException(`Help Category with ID #${id} not found`);
    }
    return category;
  }

  async update(id: number, updateHelpsCategoryDto: UpdateHelpsCategoryDto): Promise<HelpsCategories> {
    const category = await this.findOne(id);
    this.helpsCategoriesRepository.merge(category, updateHelpsCategoryDto);
    return this.helpsCategoriesRepository.save(category);
  }

  async remove(id: number): Promise<void> {
    const result = await this.helpsCategoriesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Help Category with ID #${id} not found`);
    }
  }
}