import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OdaLocationsOrdersUnavailabilities } from './entities/oda-locations-orders-unavailability.entity';
import { CreateOdaLocationsOrdersUnavailabilityDto } from './dto/create-oda-locations-orders-unavailability.dto';
import { UpdateOdaLocationsOrdersUnavailabilityDto } from './dto/update-oda-locations-orders-unavailability.dto';

@Injectable()
export class OdaLocationsOrdersUnavailabilitiesService {
  constructor(
    @InjectRepository(OdaLocationsOrdersUnavailabilities)
    private readonly repository: Repository<OdaLocationsOrdersUnavailabilities>,
  ) {}

  async create(createDto: CreateOdaLocationsOrdersUnavailabilityDto): Promise<OdaLocationsOrdersUnavailabilities> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OdaLocationsOrdersUnavailabilities[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OdaLocationsOrdersUnavailabilities> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOdaLocationsOrdersUnavailabilityDto): Promise<OdaLocationsOrdersUnavailabilities> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
