import { Module } from '@nestjs/common';
import { RewardCompaignService } from './reward-compaign.service';
import { RewardCompaignController } from './reward-compaign.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RewardCampaign } from './entities/reward-compaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RewardCampaign])],
  controllers: [RewardCompaignController],
  providers: [RewardCompaignService],
})
export class RewardCompaignModule {}