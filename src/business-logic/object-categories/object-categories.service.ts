import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectCategories } from './entities/object-category.entity';
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';

@Injectable()
export class ObjectCategoriesService {
  constructor(
    @InjectRepository(ObjectCategories)
    private readonly repository: Repository<ObjectCategories>,
  ) {}

  async create(createDto: CreateObjectCategoryDto): Promise<ObjectCategories> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<ObjectCategories[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<ObjectCategories> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateObjectCategoryDto): Promise<ObjectCategories> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
