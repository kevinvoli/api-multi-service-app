import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRewardSettingDto } from './dto/create-reward-setting.dto';
import { UpdateRewardSettingDto } from './dto/update-reward-setting.dto';
import { RewardSettings } from './entities/reward-setting.entity';

@Injectable()
export class RewardSettingsService {
  constructor(
    @InjectRepository(RewardSettings)
    private readonly rewardSettingsRepository: Repository<RewardSettings>,
  ) {}

  async create(createRewardSettingDto: CreateRewardSettingDto): Promise<RewardSettings> {
    const rewardSetting = this.rewardSettingsRepository.create(createRewardSettingDto);
    return this.rewardSettingsRepository.save(rewardSetting);
  }

  async findAll(): Promise<RewardSettings[]> {
    return this.rewardSettingsRepository.find();
  }

  async findOne(id: number): Promise<RewardSettings> {
    const rewardSetting = await this.rewardSettingsRepository.findOne({ where: { iRewardId: id } });
    if (!rewardSetting) {
      throw new NotFoundException(`RewardSetting with ID #${id} not found`);
    }
    return rewardSetting;
  }

  async update(id: number, updateRewardSettingDto: UpdateRewardSettingDto): Promise<RewardSettings> {
    const rewardSetting = await this.rewardSettingsRepository.preload({
      iRewardId: id,
      ...updateRewardSettingDto,
    });
    if (!rewardSetting) {
      throw new NotFoundException(`RewardSetting with ID #${id} not found`);
    }
    return this.rewardSettingsRepository.save(rewardSetting);
  }

  async remove(id: number): Promise<void> {
    const result = await this.rewardSettingsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`RewardSetting with ID #${id} not found`);
    }
  }
}