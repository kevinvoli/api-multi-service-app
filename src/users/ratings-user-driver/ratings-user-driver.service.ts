import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RatingsUserDriver } from './entities/ratings-user-driver.entity';
import { CreateRatingsUserDriverDto } from './dto/create-ratings-user-driver.dto';
import { UpdateRatingsUserDriverDto } from './dto/update-ratings-user-driver.dto';

@Injectable()
export class RatingsUserDriverService {
  constructor(
    @InjectRepository(RatingsUserDriver)
    private readonly repository: Repository<RatingsUserDriver>,
  ) {}

  async create(createDto: CreateRatingsUserDriverDto): Promise<RatingsUserDriver> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<RatingsUserDriver[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<RatingsUserDriver> {
    const entity = await this.repository.findOneBy({ iRatingId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateRatingsUserDriverDto): Promise<RatingsUserDriver> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
