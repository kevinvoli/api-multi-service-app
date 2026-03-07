import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverSubscriptionPlan } from './entities/driver-subscription-plan.entity';
import { CreateDriverSubscriptionPlanDto } from './dto/create-driver-subscription-plan.dto';
import { UpdateDriverSubscriptionPlanDto } from './dto/update-driver-subscription-plan.dto';

@Injectable()
export class DriverSubscriptionPlanService {
  constructor(
    @InjectRepository(DriverSubscriptionPlan)
    private readonly repository: Repository<DriverSubscriptionPlan>,
  ) {}

  async create(createDto: CreateDriverSubscriptionPlanDto): Promise<DriverSubscriptionPlan> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverSubscriptionPlan[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverSubscriptionPlan> {
    const entity = await this.repository.findOneBy({ iDriverSubscriptionPlanId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverSubscriptionPlanDto): Promise<DriverSubscriptionPlan> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
