import { Module } from '@nestjs/common';
import { RewardCompaignService } from './reward-compaign.service';
import { RewardCompaignController } from './reward-compaign.controller';

@Module({
  controllers: [RewardCompaignController],
  providers: [RewardCompaignService],
})
export class RewardCompaignModule {}
