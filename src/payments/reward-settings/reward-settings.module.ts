import { Module } from '@nestjs/common';
import { RewardSettings } from './entities/reward-setting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RewardSettingsService } from './reward-settings.service';
import { RewardSettingsController } from './reward-settings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RewardSettings])],
  controllers: [RewardSettingsController],
  providers: [RewardSettingsService],
  exports: [TypeOrmModule.forFeature([RewardSettings])],
})
export class RewardSettingsModule {}
