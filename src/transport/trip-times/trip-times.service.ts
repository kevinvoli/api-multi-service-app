import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripTimes } from './entities/trip-time.entity';
import { CreateTripTimeDto } from './dto/create-trip-time.dto';
import { UpdateTripTimeDto } from './dto/update-trip-time.dto';

@Injectable()
export class TripTimesService {
  constructor(
    @InjectRepository(TripTimes)
    private readonly repository: Repository<TripTimes>,
  ) {}

  async create(createDto: CreateTripTimeDto): Promise<TripTimes> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripTimes[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripTimes> {
    const entity = await this.repository.findOneBy({ iTripTimeId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripTimeDto): Promise<TripTimes> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
