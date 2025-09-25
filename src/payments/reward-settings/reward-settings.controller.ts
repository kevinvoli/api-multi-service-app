import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RewardSettingsService } from './reward-settings.service';
import { CreateRewardSettingDto } from './dto/create-reward-setting.dto';
import { UpdateRewardSettingDto } from './dto/update-reward-setting.dto';

@Controller('reward-settings')
export class RewardSettingsController {
  constructor(private readonly rewardSettingsService: RewardSettingsService) {}

  @Post()
  create(@Body() createRewardSettingDto: CreateRewardSettingDto) {
    return this.rewardSettingsService.create(createRewardSettingDto);
  }

  @Get()
  findAll() {
    return this.rewardSettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rewardSettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRewardSettingDto: UpdateRewardSettingDto) {
    return this.rewardSettingsService.update(+id, updateRewardSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rewardSettingsService.remove(+id);
  }
}
