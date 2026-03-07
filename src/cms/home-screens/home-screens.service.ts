import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HomeScreens } from './entities/home-screen.entity';
import { CreateHomeScreenDto } from './dto/create-home-screen.dto';
import { UpdateHomeScreenDto } from './dto/update-home-screen.dto';

@Injectable()
export class HomeScreensService {
  constructor(
    @InjectRepository(HomeScreens)
    private readonly repository: Repository<HomeScreens>,
  ) {}

  async create(createDto: CreateHomeScreenDto): Promise<HomeScreens> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<HomeScreens[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<HomeScreens> {
    const entity = await this.repository.findOneBy({ iId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateHomeScreenDto): Promise<HomeScreens> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
