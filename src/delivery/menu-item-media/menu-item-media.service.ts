import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuItemMedia } from './entities/menu-item-media.entity';
import { CreateMenuItemMediaDto } from './dto/create-menu-item-media.dto';
import { UpdateMenuItemMediaDto } from './dto/update-menu-item-media.dto';

@Injectable()
export class MenuItemMediaService {
  constructor(
    @InjectRepository(MenuItemMedia)
    private readonly repository: Repository<MenuItemMedia>,
  ) {}

  async create(createDto: CreateMenuItemMediaDto): Promise<MenuItemMedia> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MenuItemMedia[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MenuItemMedia> {
    const entity = await this.repository.findOneBy({ iMediaId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMenuItemMediaDto): Promise<MenuItemMedia> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
