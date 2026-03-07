import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RewardCompaignService } from './reward-compaign.service';
import { RewardCompaignController } from './reward-compaign.controller';

import { RewardCampaign } from './entities/reward-compaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RewardCampaign])],
  controllers: [RewardCompaignController],
  providers: [RewardCompaignService],
  exports: [TypeOrmModule.forFeature([RewardCampaign])],
})
export class RewardCompaignModule {}
