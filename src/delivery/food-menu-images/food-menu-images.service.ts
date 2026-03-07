import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodMenuImages } from './entities/food-menu-image.entity';
import { CreateFoodMenuImageDto } from './dto/create-food-menu-image.dto';
import { UpdateFoodMenuImageDto } from './dto/update-food-menu-image.dto';

@Injectable()
export class FoodMenuImagesService {
  constructor(
    @InjectRepository(FoodMenuImages)
    private readonly repository: Repository<FoodMenuImages>,
  ) {}

  async create(createDto: CreateFoodMenuImageDto): Promise<FoodMenuImages> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<FoodMenuImages[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<FoodMenuImages> {
    const entity = await this.repository.findOneBy({ iFoodMenuImageId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateFoodMenuImageDto): Promise<FoodMenuImages> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
