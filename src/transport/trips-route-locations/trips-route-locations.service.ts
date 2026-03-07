import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripsRouteLocations } from './entities/trips-route-location.entity';
import { CreateTripsRouteLocationDto } from './dto/create-trips-route-location.dto';
import { UpdateTripsRouteLocationDto } from './dto/update-trips-route-location.dto';

@Injectable()
export class TripsRouteLocationsService {
  constructor(
    @InjectRepository(TripsRouteLocations)
    private readonly repository: Repository<TripsRouteLocations>,
  ) {}

  async create(createDto: CreateTripsRouteLocationDto): Promise<TripsRouteLocations> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripsRouteLocations[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripsRouteLocations> {
    const entity = await this.repository.findOneBy({ iTripLocationId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripsRouteLocationDto): Promise<TripsRouteLocations> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
