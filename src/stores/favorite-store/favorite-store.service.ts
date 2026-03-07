import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteStore } from './entities/favorite-store.entity';
import { CreateFavoriteStoreDto } from './dto/create-favorite-store.dto';
import { UpdateFavoriteStoreDto } from './dto/update-favorite-store.dto';

@Injectable()
export class FavoriteStoreService {
  constructor(
    @InjectRepository(FavoriteStore)
    private readonly repository: Repository<FavoriteStore>,
  ) {}

  async create(createDto: CreateFavoriteStoreDto): Promise<FavoriteStore> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<FavoriteStore[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<FavoriteStore> {
    const entity = await this.repository.findOneBy({ iFavstoreId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateFavoriteStoreDto): Promise<FavoriteStore> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
