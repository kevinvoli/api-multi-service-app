import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RewardCompaignService } from './reward-compaign.service';
import { CreateRewardCompaignDto } from './dto/create-reward-compaign.dto';
import { UpdateRewardCompaignDto } from './dto/update-reward-compaign.dto';

@Controller('reward-compaign')
export class RewardCompaignController {
  constructor(private readonly rewardCompaignService: RewardCompaignService) {}

  @Post()
  create(@Body() createRewardCompaignDto: CreateRewardCompaignDto) {
    return this.rewardCompaignService.create(createRewardCompaignDto);
  }

  @Get()
  findAll() {
    return this.rewardCompaignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rewardCompaignService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRewardCompaignDto: UpdateRewardCompaignDto) {
    return this.rewardCompaignService.update(+id, updateRewardCompaignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rewardCompaignService.remove(+id);
  }
}
