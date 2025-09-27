import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RewardCompaignService } from './reward-compaign.service';
import { CreateRewardCompaignDto } from './dto/create-reward-compaign.dto';
import { UpdateRewardCompaignDto } from './dto/update-reward-compaign.dto';
import { RewardCampaign } from './entities/reward-compaign.entity';

@Controller('reward-compaign')
export class RewardCompaignController {
  constructor(private readonly rewardCompaignService: RewardCompaignService) {}

  @Post()
  async create(@Body() createRewardCompaignDto: CreateRewardCompaignDto): Promise<RewardCampaign> {
    return this.rewardCompaignService.create(createRewardCompaignDto);
  }

  @Get()
  async findAll(): Promise<RewardCampaign[]> {
    return this.rewardCompaignService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<RewardCampaign> {
    return this.rewardCompaignService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateRewardCompaignDto: UpdateRewardCompaignDto): Promise<RewardCampaign> {
    return this.rewardCompaignService.update(id, updateRewardCompaignDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.rewardCompaignService.remove(id);
  }
}