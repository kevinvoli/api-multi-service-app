import { Module } from '@nestjs/common';
import { DriverRewardService } from './driver-reward.service';
import { DriverRewardController } from './driver-reward.controller';

@Module({
  controllers: [DriverRewardController],
  providers: [DriverRewardService],
})
export class DriverRewardModule {}
