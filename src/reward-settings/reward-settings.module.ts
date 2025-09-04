import { Module } from '@nestjs/common';
import { RewardSettingsService } from './reward-settings.service';
import { RewardSettingsController } from './reward-settings.controller';

@Module({
  controllers: [RewardSettingsController],
  providers: [RewardSettingsService],
})
export class RewardSettingsModule {}
