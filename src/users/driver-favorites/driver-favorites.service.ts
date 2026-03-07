import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverFavorites } from './entities/driver-favorite.entity';
import { CreateDriverFavoriteDto } from './dto/create-driver-favorite.dto';
import { UpdateDriverFavoriteDto } from './dto/update-driver-favorite.dto';

@Injectable()
export class DriverFavoritesService {
  constructor(
    @InjectRepository(DriverFavorites)
    private readonly repository: Repository<DriverFavorites>,
  ) {}

  async create(createDto: CreateDriverFavoriteDto): Promise<DriverFavorites> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverFavorites[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverFavorites> {
    const entity = await this.repository.findOneBy({ iDriverFavorite: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverFavoriteDto): Promise<DriverFavorites> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
