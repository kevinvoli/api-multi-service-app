import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripsStopoverpointLocation } from './entities/trips-stopoverpoint-location.entity';
import { CreateTripsStopoverpointLocationDto } from './dto/create-trips-stopoverpoint-location.dto';
import { UpdateTripsStopoverpointLocationDto } from './dto/update-trips-stopoverpoint-location.dto';

@Injectable()
export class TripsStopoverpointLocationService {
  constructor(
    @InjectRepository(TripsStopoverpointLocation)
    private readonly repository: Repository<TripsStopoverpointLocation>,
  ) {}

  async create(createDto: CreateTripsStopoverpointLocationDto): Promise<TripsStopoverpointLocation> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripsStopoverpointLocation[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripsStopoverpointLocation> {
    const entity = await this.repository.findOneBy({ iStopId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripsStopoverpointLocationDto): Promise<TripsStopoverpointLocation> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
