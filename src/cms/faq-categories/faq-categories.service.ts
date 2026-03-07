import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FaqCategories } from './entities/faq-category.entity';
import { CreateFaqCategoryDto } from './dto/create-faq-category.dto';
import { UpdateFaqCategoryDto } from './dto/update-faq-category.dto';

@Injectable()
export class FaqCategoriesService {
  constructor(
    @InjectRepository(FaqCategories)
    private readonly repository: Repository<FaqCategories>,
  ) {}

  async create(createDto: CreateFaqCategoryDto): Promise<FaqCategories> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<FaqCategories[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<FaqCategories> {
    const entity = await this.repository.findOneBy({ iFaqcategoryId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateFaqCategoryDto): Promise<FaqCategories> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
