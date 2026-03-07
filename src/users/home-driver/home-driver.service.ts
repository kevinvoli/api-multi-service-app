import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HomeDriver } from './entities/home-driver.entity';
import { CreateHomeDriverDto } from './dto/create-home-driver.dto';
import { UpdateHomeDriverDto } from './dto/update-home-driver.dto';

@Injectable()
export class HomeDriverService {
  constructor(
    @InjectRepository(HomeDriver)
    private readonly repository: Repository<HomeDriver>,
  ) {}

  async create(createDto: CreateHomeDriverDto): Promise<HomeDriver> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<HomeDriver[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<HomeDriver> {
    const entity = await this.repository.findOneBy({ iDriverId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateHomeDriverDto): Promise<HomeDriver> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
