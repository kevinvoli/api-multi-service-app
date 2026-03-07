import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationWiseFare } from './entities/location-wise-fare.entity';
import { CreateLocationWiseFareDto } from './dto/create-location-wise-fare.dto';
import { UpdateLocationWiseFareDto } from './dto/update-location-wise-fare.dto';

@Injectable()
export class LocationWiseFareService {
  constructor(
    @InjectRepository(LocationWiseFare)
    private readonly repository: Repository<LocationWiseFare>,
  ) {}

  async create(createDto: CreateLocationWiseFareDto): Promise<LocationWiseFare> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<LocationWiseFare[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<LocationWiseFare> {
    const entity = await this.repository.findOneBy({ iLocatioId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateLocationWiseFareDto): Promise<LocationWiseFare> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
