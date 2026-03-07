import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripDestinations } from './entities/trip-destination.entity';
import { CreateTripDestinationDto } from './dto/create-trip-destination.dto';
import { UpdateTripDestinationDto } from './dto/update-trip-destination.dto';

@Injectable()
export class TripDestinationsService {
  constructor(
    @InjectRepository(TripDestinations)
    private readonly repository: Repository<TripDestinations>,
  ) {}

  async create(createDto: CreateTripDestinationDto): Promise<TripDestinations> {
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

  async update(id: number, updateDto: UpdateTripDestinationDto): Promise<TripDestinations> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
