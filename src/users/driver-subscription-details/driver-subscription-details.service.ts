import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverSubscriptionDetails } from './entities/driver-subscription-detail.entity';
import { CreateDriverSubscriptionDetailDto } from './dto/create-driver-subscription-detail.dto';
import { UpdateDriverSubscriptionDetailDto } from './dto/update-driver-subscription-detail.dto';

@Injectable()
export class DriverSubscriptionDetailsService {
  constructor(
    @InjectRepository(DriverSubscriptionDetails)
    private readonly repository: Repository<DriverSubscriptionDetails>,
  ) {}

  async create(createDto: CreateDriverSubscriptionDetailDto): Promise<DriverSubscriptionDetails> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverSubscriptionDetails[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverSubscriptionDetails> {
    const entity = await this.repository.findOneBy({ iDriverSubscriptionDetailsId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverSubscriptionDetailDto): Promise<DriverSubscriptionDetails> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
