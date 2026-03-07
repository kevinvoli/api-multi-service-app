import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreCategories } from './entities/store-category.entity';
import { CreateStoreCategoryDto } from './dto/create-store-category.dto';
import { UpdateStoreCategoryDto } from './dto/update-store-category.dto';

@Injectable()
export class StoreCategoriesService {
  constructor(
    @InjectRepository(StoreCategories)
    private readonly repository: Repository<StoreCategories>,
  ) {}

  async create(createDto: CreateStoreCategoryDto): Promise<StoreCategories> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<StoreCategories[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<StoreCategories> {
    const entity = await this.repository.findOneBy({ iCategoryId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateStoreCategoryDto): Promise<StoreCategories> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
