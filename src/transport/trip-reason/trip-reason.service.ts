import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripReason } from './entities/trip-reason.entity';
import { CreateTripReasonDto } from './dto/create-trip-reason.dto';
import { UpdateTripReasonDto } from './dto/update-trip-reason.dto';

@Injectable()
export class TripReasonService {
  constructor(
    @InjectRepository(TripReason)
    private readonly repository: Repository<TripReason>,
  ) {}

  async create(createDto: CreateTripReasonDto): Promise<TripReason> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripReason[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripReason> {
    const entity = await this.repository.findOneBy({ iTripReasonId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripReasonDto): Promise<TripReason> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
