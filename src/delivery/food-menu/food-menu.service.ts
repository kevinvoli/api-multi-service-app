import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodMenu } from './entities/food-menu.entity';
import { CreateFoodMenuDto } from './dto/create-food-menu.dto';
import { UpdateFoodMenuDto } from './dto/update-food-menu.dto';

@Injectable()
export class FoodMenuService {
  constructor(
    @InjectRepository(FoodMenu)
    private readonly repository: Repository<FoodMenu>,
  ) {}

  async create(createDto: CreateFoodMenuDto): Promise<FoodMenu> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<FoodMenu[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<FoodMenu> {
    const entity = await this.repository.findOneBy({ iFoodMenuId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateFoodMenuDto): Promise<FoodMenu> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
