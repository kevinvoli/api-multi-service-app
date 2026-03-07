import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripDestinations } from './entities/trip-help-detail.entity';
import { CreateTripHelpDetailDto } from './dto/create-trip-help-detail.dto';
import { UpdateTripHelpDetailDto } from './dto/update-trip-help-detail.dto';

@Injectable()
export class TripHelpDetailService {
  constructor(
    @InjectRepository(TripDestinations)
    private readonly repository: Repository<TripDestinations>,
  ) {}

  async create(createDto: CreateTripHelpDetailDto): Promise<TripDestinations> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripDestinations[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripDestinations> {
    const entity = await this.repository.findOneBy({ iTripDestinationId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripHelpDetailDto): Promise<TripDestinations> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
