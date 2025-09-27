import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRewardCompaignDto } from './dto/create-reward-compaign.dto';
import { UpdateRewardCompaignDto } from './dto/update-reward-compaign.dto';
import { RewardCampaign } from './entities/reward-compaign.entity';

@Injectable()
export class RewardCompaignService {
  constructor(
    @InjectRepository(RewardCampaign)
    private readonly rewardCampaignRepository: Repository<RewardCampaign>,
  ) {}

  async create(createRewardCompaignDto: CreateRewardCompaignDto): Promise<RewardCampaign> {
    const rewardCampaign = this.rewardCampaignRepository.create(createRewardCompaignDto);
    return this.rewardCampaignRepository.save(rewardCampaign);
  }

  async findAll(): Promise<RewardCampaign[]> {
    return this.rewardCampaignRepository.find();
  }

  async findOne(id: number): Promise<RewardCampaign> {
    const rewardCampaign = await this.rewardCampaignRepository.findOne({ where: { iCampaignId: id } });
    if (!rewardCampaign) {
      throw new NotFoundException(`RewardCampaign with ID #${id} not found`);
    }
    return rewardCampaign;
  }

  async update(id: number, updateRewardCompaignDto: UpdateRewardCompaignDto): Promise<RewardCampaign> {
    const rewardCampaign = await this.rewardCampaignRepository.preload({
      iCampaignId: id,
      ...updateRewardCompaignDto,
    });
    if (!rewardCampaign) {
      throw new NotFoundException(`RewardCampaign with ID #${id} not found`);
    }
    return this.rewardCampaignRepository.save(rewardCampaign);
  }

  async remove(id: number): Promise<void> {
    const result = await this.rewardCampaignRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`RewardCampaign with ID #${id} not found`);
    }
  }
}