import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverReward } from './entities/driver-reward.entity';
import { CreateDriverRewardDto } from './dto/create-driver-reward.dto';
import { UpdateDriverRewardDto } from './dto/update-driver-reward.dto';

@Injectable()
export class DriverRewardService {
  constructor(
    @InjectRepository(DriverReward)
    private readonly repository: Repository<DriverReward>,
  ) {}

  async create(createDto: CreateDriverRewardDto): Promise<DriverReward> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverReward[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverReward> {
    const entity = await this.repository.findOneBy({ iDriverReward: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverRewardDto): Promise<DriverReward> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
