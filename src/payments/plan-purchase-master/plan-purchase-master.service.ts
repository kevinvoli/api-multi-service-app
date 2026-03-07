import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanPurchaseMaster } from './entities/plan-purchase-master.entity';
import { CreatePlanPurchaseMasterDto } from './dto/create-plan-purchase-master.dto';
import { UpdatePlanPurchaseMasterDto } from './dto/update-plan-purchase-master.dto';

@Injectable()
export class PlanPurchaseMasterService {
  constructor(
    @InjectRepository(PlanPurchaseMaster)
    private readonly repository: Repository<PlanPurchaseMaster>,
  ) {}

  async create(createDto: CreatePlanPurchaseMasterDto): Promise<PlanPurchaseMaster> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<PlanPurchaseMaster[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<PlanPurchaseMaster> {
    const entity = await this.repository.findOneBy({ iPurchaseId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdatePlanPurchaseMasterDto): Promise<PlanPurchaseMaster> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
