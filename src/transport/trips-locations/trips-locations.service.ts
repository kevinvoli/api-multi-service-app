import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripsLocations } from './entities/trips-location.entity';
import { CreateTripsLocationDto } from './dto/create-trips-location.dto';
import { UpdateTripsLocationDto } from './dto/update-trips-location.dto';

@Injectable()
export class TripsLocationsService {
  constructor(
    @InjectRepository(TripsLocations)
    private readonly repository: Repository<TripsLocations>,
  ) {}

  async create(createDto: CreateTripsLocationDto): Promise<TripsLocations> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripsLocations[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripsLocations> {
    const entity = await this.repository.findOneBy({ iTripLocationId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripsLocationDto): Promise<TripsLocations> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
