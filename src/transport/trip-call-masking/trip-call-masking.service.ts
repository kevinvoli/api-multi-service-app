import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripCallMasking } from './entities/trip-call-masking.entity';
import { CreateTripCallMaskingDto } from './dto/create-trip-call-masking.dto';
import { UpdateTripCallMaskingDto } from './dto/update-trip-call-masking.dto';

@Injectable()
export class TripCallMaskingService {
  constructor(
    @InjectRepository(TripCallMasking)
    private readonly repository: Repository<TripCallMasking>,
  ) {}

  async create(createDto: CreateTripCallMaskingDto): Promise<TripCallMasking> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripCallMasking[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripCallMasking> {
    const entity = await this.repository.findOneBy({ iTripCallmaskid: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripCallMaskingDto): Promise<TripCallMasking> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
