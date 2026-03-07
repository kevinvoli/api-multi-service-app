import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreCategoryTags } from './entities/store-category-tag.entity';
import { CreateStoreCategoryTagDto } from './dto/create-store-category-tag.dto';
import { UpdateStoreCategoryTagDto } from './dto/update-store-category-tag.dto';

@Injectable()
export class StoreCategoryTagsService {
  constructor(
    @InjectRepository(StoreCategoryTags)
    private readonly repository: Repository<StoreCategoryTags>,
  ) {}

  async create(createDto: CreateStoreCategoryTagDto): Promise<StoreCategoryTags> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<StoreCategoryTags[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<StoreCategoryTags> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateStoreCategoryTagDto): Promise<StoreCategoryTags> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
