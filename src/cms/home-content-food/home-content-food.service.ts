import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Homecontentfood } from './entities/home-content-food.entity';
import { CreateHomeContentFoodDto } from './dto/create-home-content-food.dto';
import { UpdateHomeContentFoodDto } from './dto/update-home-content-food.dto';

@Injectable()
export class HomeContentFoodService {
  constructor(
    @InjectRepository(Homecontentfood)
    private readonly repository: Repository<Homecontentfood>,
  ) {}

  async create(createDto: CreateHomeContentFoodDto): Promise<Homecontentfood> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<Homecontentfood[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Homecontentfood> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateHomeContentFoodDto): Promise<Homecontentfood> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
