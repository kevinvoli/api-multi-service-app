import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripOrderDetails } from './entities/trip-order-detail.entity';
import { CreateTripOderDetailDto } from './dto/create-trip-oder-detail.dto';
import { UpdateTripOderDetailDto } from './dto/update-trip-oder-detail.dto';

@Injectable()
export class TripOderDetailsService {
  constructor(
    @InjectRepository(TripOrderDetails)
    private readonly repository: Repository<TripOrderDetails>,
  ) {}

  async create(createDto: CreateTripOderDetailDto): Promise<TripOrderDetails> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TripOrderDetails[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TripOrderDetails> {
    const entity = await this.repository.findOneBy({ iOrderDetailId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTripOderDetailDto): Promise<TripOrderDetails> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
