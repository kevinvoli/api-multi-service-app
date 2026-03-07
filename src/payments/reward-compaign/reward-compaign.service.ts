import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RewardCampaign } from './entities/reward-compaign.entity';
import { CreateRewardCompaignDto } from './dto/create-reward-compaign.dto';
import { UpdateRewardCompaignDto } from './dto/update-reward-compaign.dto';

@Injectable()
export class RewardCompaignService {
  constructor(
    @InjectRepository(RewardCampaign)
    private readonly repository: Repository<RewardCampaign>,
  ) {}

  async create(createDto: CreateRewardCompaignDto): Promise<RewardCampaign> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<RewardCampaign[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<RewardCampaign> {
    const entity = await this.repository.findOneBy({ iCampaignId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateRewardCompaignDto): Promise<RewardCampaign> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
