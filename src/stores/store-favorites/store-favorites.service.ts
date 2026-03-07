import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreFavorites } from './entities/store-favorite.entity';
import { CreateStoreFavoriteDto } from './dto/create-store-favorite.dto';
import { UpdateStoreFavoriteDto } from './dto/update-store-favorite.dto';

@Injectable()
export class StoreFavoritesService {
  constructor(
    @InjectRepository(StoreFavorites)
    private readonly repository: Repository<StoreFavorites>,
  ) {}

  async create(createDto: CreateStoreFavoriteDto): Promise<StoreFavorites> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<StoreFavorites[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<StoreFavorites> {
    const entity = await this.repository.findOneBy({ iStoreFavorite: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateStoreFavoriteDto): Promise<StoreFavorites> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
