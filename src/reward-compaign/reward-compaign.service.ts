import { Injectable } from '@nestjs/common';
import { CreateRewardCompaignDto } from './dto/create-reward-compaign.dto';
import { UpdateRewardCompaignDto } from './dto/update-reward-compaign.dto';

@Injectable()
export class RewardCompaignService {
  create(createRewardCompaignDto: CreateRewardCompaignDto) {
    return 'This action adds a new rewardCompaign';
  }

  findAll() {
    return `This action returns all rewardCompaign`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rewardCompaign`;
  }

  update(id: number, updateRewardCompaignDto: UpdateRewardCompaignDto) {
    return `This action updates a #${id} rewardCompaign`;
  }

  remove(id: number) {
    return `This action removes a #${id} rewardCompaign`;
  }
}
