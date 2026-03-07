import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TempTripOrderDetails } from './entities/temp-trip-order-detail.entity';
import { CreateTempTripOrderDetailDto } from './dto/create-temp-trip-order-detail.dto';
import { UpdateTempTripOrderDetailDto } from './dto/update-temp-trip-order-detail.dto';

@Injectable()
export class TempTripOrderDetailsService {
  constructor(
    @InjectRepository(TempTripOrderDetails)
    private readonly repository: Repository<TempTripOrderDetails>,
  ) {}

  async create(createDto: CreateTempTripOrderDetailDto): Promise<TempTripOrderDetails> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<TempTripOrderDetails[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TempTripOrderDetails> {
    const entity = await this.repository.findOneBy({ iTempOrderDetailId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateTempTripOrderDetailDto): Promise<TempTripOrderDetails> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
