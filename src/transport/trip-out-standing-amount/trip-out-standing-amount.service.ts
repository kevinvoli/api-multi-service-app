import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripOutstandingAmount } from './entities/trip-out-standing-amount.entity';
import { CreateTripOutStandingAmountDto } from './dto/create-trip-out-standing-amount.dto';
import { UpdateTripOutStandingAmountDto } from './dto/update-trip-out-standing-amount.dto';

@Injectable()
export class TripOutStandingAmountService {
  constructor(
    @InjectRepository(TripOutstandingAmount)
    private readonly repository: Repository<TripOutstandingAmount>,
  ) {}

  async create(createDto: CreateTripOutStandingAmountDto): Promise<TripOutstandingAmount> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripOutstandingAmount[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripOutstandingAmount> {
    const entity = await this.repository.findOneBy({ iTripOutstandId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripOutStandingAmountDto): Promise<TripOutstandingAmount> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
