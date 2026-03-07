import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RewardSettings } from './entities/reward-setting.entity';
import { CreateRewardSettingDto } from './dto/create-reward-setting.dto';
import { UpdateRewardSettingDto } from './dto/update-reward-setting.dto';

@Injectable()
export class RewardSettingsService {
  constructor(
    @InjectRepository(RewardSettings)
    private readonly repository: Repository<RewardSettings>,
  ) {}

  async create(createDto: CreateRewardSettingDto): Promise<RewardSettings> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<RewardSettings[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<RewardSettings> {
    const entity = await this.repository.findOneBy({ iRewardId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateRewardSettingDto): Promise<RewardSettings> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
