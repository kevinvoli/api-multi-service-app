import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuitemOptionsCategory } from './entities/menu-item-options-category.entity';
import { CreateMenuItemOptionsCategoryDto } from './dto/create-menu-item-options-category.dto';
import { UpdateMenuItemOptionsCategoryDto } from './dto/update-menu-item-options-category.dto';

@Injectable()
export class MenuItemOptionsCategoryService {
  constructor(
    @InjectRepository(MenuitemOptionsCategory)
    private readonly repository: Repository<MenuitemOptionsCategory>,
  ) {}

  async create(createDto: CreateMenuItemOptionsCategoryDto): Promise<MenuitemOptionsCategory> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MenuitemOptionsCategory[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MenuitemOptionsCategory> {
    const entity = await this.repository.findOneBy({ iOptionsCategoryId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMenuItemOptionsCategoryDto): Promise<MenuitemOptionsCategory> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
