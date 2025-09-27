import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RewardSettingsService } from './reward-settings.service';
import { CreateRewardSettingDto } from './dto/create-reward-setting.dto';
import { UpdateRewardSettingDto } from './dto/update-reward-setting.dto';
import { RewardSettings } from './entities/reward-setting.entity';

@Controller('reward-settings')
export class RewardSettingsController {
  constructor(private readonly rewardSettingsService: RewardSettingsService) {}

  @Post()
  async create(@Body() createRewardSettingDto: CreateRewardSettingDto): Promise<RewardSettings> {
    return this.rewardSettingsService.create(createRewardSettingDto);
  }

  @Get()
  async findAll(): Promise<RewardSettings[]> {
    return this.rewardSettingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<RewardSettings> {
    return this.rewardSettingsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateRewardSettingDto: UpdateRewardSettingDto): Promise<RewardSettings> {
    return this.rewardSettingsService.update(id, updateRewardSettingDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.rewardSettingsService.remove(id);
  }
}