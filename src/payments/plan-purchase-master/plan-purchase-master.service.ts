import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanPurchaseMasterDto } from './dto/create-plan-purchase-master.dto';
import { UpdatePlanPurchaseMasterDto } from './dto/update-plan-purchase-master.dto';
import { PlanPurchaseMaster } from './entities/plan-purchase-master.entity';

@Injectable()
export class PlanPurchaseMasterService {
  constructor(
    @InjectRepository(PlanPurchaseMaster)
    private readonly planPurchaseMasterRepository: Repository<PlanPurchaseMaster>,
  ) {}

  async create(createPlanPurchaseMasterDto: CreatePlanPurchaseMasterDto): Promise<PlanPurchaseMaster> {
    const planPurchaseMaster = this.planPurchaseMasterRepository.create(createPlanPurchaseMasterDto);
    return this.planPurchaseMasterRepository.save(planPurchaseMaster);
  }

  async findAll(): Promise<PlanPurchaseMaster[]> {
    return this.planPurchaseMasterRepository.find();
  }

  async findOne(id: number): Promise<PlanPurchaseMaster> {
    const planPurchaseMaster = await this.planPurchaseMasterRepository.findOne({ where: { iPurchaseId: id } });
    if (!planPurchaseMaster) {
      throw new NotFoundException(`PlanPurchaseMaster with ID #${id} not found`);
    }
    return planPurchaseMaster;
  }

  async update(id: number, updatePlanPurchaseMasterDto: UpdatePlanPurchaseMasterDto): Promise<PlanPurchaseMaster> {
    const planPurchaseMaster = await this.planPurchaseMasterRepository.preload({
      iPurchaseId: id,
      ...updatePlanPurchaseMasterDto,
    });
    if (!planPurchaseMaster) {
      throw new NotFoundException(`PlanPurchaseMaster with ID #${id} not found`);
    }
    return this.planPurchaseMasterRepository.save(planPurchaseMaster);
  }

  async remove(id: number): Promise<void> {
    const result = await this.planPurchaseMasterRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`PlanPurchaseMaster with ID #${id} not found`);
    }
  }
}