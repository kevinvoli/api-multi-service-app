import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFaqCategoryDto } from './dto/create-faq-category.dto';
import { UpdateFaqCategoryDto } from './dto/update-faq-category.dto';
import { FaqCategories } from './entities/faq-category.entity';

@Injectable()
export class FaqCategoriesService {
  constructor(
    @InjectRepository(FaqCategories)
    private readonly faqCategoriesRepository: Repository<FaqCategories>,
  ) {}

  async create(createFaqCategoryDto: CreateFaqCategoryDto): Promise<FaqCategories> {
    const newCategory = this.faqCategoriesRepository.create(createFaqCategoryDto);
    return this.faqCategoriesRepository.save(newCategory);
  }

  async findAll(): Promise<FaqCategories[]> {
    return this.faqCategoriesRepository.find();
  }

  async findOne(id: number): Promise<FaqCategories> {
    const category = await this.faqCategoriesRepository.findOne({ where: { iFaqcategoryId: id } });
    if (!category) {
      throw new NotFoundException(`FAQ Category with ID #${id} not found`);
    }
    return category;
  }

  async update(id: number, updateFaqCategoryDto: UpdateFaqCategoryDto): Promise<FaqCategories> {
    const category = await this.findOne(id);
    this.faqCategoriesRepository.merge(category, updateFaqCategoryDto);
    return this.faqCategoriesRepository.save(category);
  }

  async remove(id: number): Promise<void> {
    const result = await this.faqCategoriesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`FAQ Category with ID #${id} not found`);
    }
  }
}