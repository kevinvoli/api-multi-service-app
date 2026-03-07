import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuisine } from './entities/cuisine.entity';
import { CreateCuisineDto } from './dto/create-cuisine.dto';
import { UpdateCuisineDto } from './dto/update-cuisine.dto';

@Injectable()
export class CuisineService {
  constructor(
    @InjectRepository(Cuisine)
    private readonly repository: Repository<Cuisine>,
  ) {}

  async create(createDto: CreateCuisineDto): Promise<Cuisine> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<Cuisine[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Cuisine> {
    const entity = await this.repository.findOneBy({ cuisineId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateCuisineDto): Promise<Cuisine> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
