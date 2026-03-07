import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverLocationAirport } from './entities/driver-location-airport.entity';
import { CreateDriverLocationAirportDto } from './dto/create-driver-location-airport.dto';
import { UpdateDriverLocationAirportDto } from './dto/update-driver-location-airport.dto';

@Injectable()
export class DriverLocationAirportService {
  constructor(
    @InjectRepository(DriverLocationAirport)
    private readonly repository: Repository<DriverLocationAirport>,
  ) {}

  async create(createDto: CreateDriverLocationAirportDto): Promise<DriverLocationAirport> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverLocationAirport[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverLocationAirport> {
    const entity = await this.repository.findOneBy({ iDriverAirportLocationId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverLocationAirportDto): Promise<DriverLocationAirport> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
