import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';
import { ObjectCategories } from './entities/object-category.entity';

@Injectable()
export class ObjectCategoriesService {
  constructor(
    @InjectRepository(ObjectCategories)
    private readonly objectCategoryRepository: Repository<ObjectCategories>,
  ) {}

  create(createObjectCategoryDto: CreateObjectCategoryDto) {
    const category = this.objectCategoryRepository.create(createObjectCategoryDto);
    return this.objectCategoryRepository.save(category);
  }

  findAll() {
    return this.objectCategoryRepository.find();
  }

  async findOne(id: number) {
    const category = await this.objectCategoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`ObjectCategory with ID ${id} not found`);
    }
    return category;
  }

  async update(id: number, updateObjectCategoryDto: UpdateObjectCategoryDto) {
    const category = await this.objectCategoryRepository.preload({
      id,
      ...updateObjectCategoryDto,
    });
    if (!category) {
      throw new NotFoundException(`ObjectCategory with ID ${id} not found`);
    }
    return this.objectCategoryRepository.save(category);
  }

  async remove(id: number) {
    const result = await this.objectCategoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ObjectCategory with ID ${id} not found`);
    }
    return { deleted: true };
  }
}