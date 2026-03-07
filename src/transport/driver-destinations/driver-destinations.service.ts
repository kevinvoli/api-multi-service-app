import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverDestinations } from './entities/driver-destination.entity';
import { CreateDriverDestinationDto } from './dto/create-driver-destination.dto';
import { UpdateDriverDestinationDto } from './dto/update-driver-destination.dto';

@Injectable()
export class DriverDestinationsService {
  constructor(
    @InjectRepository(DriverDestinations)
    private readonly repository: Repository<DriverDestinations>,
  ) {}

  async create(createDto: CreateDriverDestinationDto): Promise<DriverDestinations> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverDestinations[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverDestinations> {
    const entity = await this.repository.findOneBy({ idriverdestinations: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverDestinationDto): Promise<DriverDestinations> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
