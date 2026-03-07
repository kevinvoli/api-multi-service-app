import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuitemOptions } from './entities/menu-item-option.entity';
import { CreateMenuItemOptionDto } from './dto/create-menu-item-option.dto';
import { UpdateMenuItemOptionDto } from './dto/update-menu-item-option.dto';

@Injectable()
export class MenuItemOptionsService {
  constructor(
    @InjectRepository(MenuitemOptions)
    private readonly repository: Repository<MenuitemOptions>,
  ) {}

  async create(createDto: CreateMenuItemOptionDto): Promise<MenuitemOptions> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MenuitemOptions[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MenuitemOptions> {
    const entity = await this.repository.findOneBy({ iOptionId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMenuItemOptionDto): Promise<MenuitemOptions> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
