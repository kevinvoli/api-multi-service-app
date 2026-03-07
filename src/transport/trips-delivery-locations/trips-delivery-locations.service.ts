import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripsDeliveryLocation } from './entities/trips-delivery-location.entity';
import { CreateTripsDeliveryLocationDto } from './dto/create-trips-delivery-location.dto';
import { UpdateTripsDeliveryLocationDto } from './dto/update-trips-delivery-location.dto';

@Injectable()
export class TripsDeliveryLocationsService {
  constructor(
    @InjectRepository(TripsDeliveryLocation)
    private readonly repository: Repository<TripsDeliveryLocation>,
  ) {}

  async create(createDto: CreateTripsDeliveryLocationDto): Promise<TripsDeliveryLocation> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripsDeliveryLocation[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripsDeliveryLocation> {
    const entity = await this.repository.findOneBy({ iTripDeliveryLocationId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripsDeliveryLocationDto): Promise<TripsDeliveryLocation> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
