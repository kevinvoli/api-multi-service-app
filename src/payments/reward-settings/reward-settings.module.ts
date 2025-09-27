import { Module } from '@nestjs/common';
import { RewardSettingsService } from './reward-settings.service';
import { RewardSettingsController } from './reward-settings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RewardSettings } from './entities/reward-setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RewardSettings])],
  controllers: [RewardSettingsController],
  providers: [RewardSettingsService],
})
export class RewardSettingsModule {}