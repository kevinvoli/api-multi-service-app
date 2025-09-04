import { Injectable } from '@nestjs/common';
import { CreateRewardSettingDto } from './dto/create-reward-setting.dto';
import { UpdateRewardSettingDto } from './dto/update-reward-setting.dto';

@Injectable()
export class RewardSettingsService {
  create(createRewardSettingDto: CreateRewardSettingDto) {
    return 'This action adds a new rewardSetting';
  }

  findAll() {
    return `This action returns all rewardSettings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rewardSetting`;
  }

  update(id: number, updateRewardSettingDto: UpdateRewardSettingDto) {
    return `This action updates a #${id} rewardSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} rewardSetting`;
  }
}
