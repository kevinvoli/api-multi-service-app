import { Module } from '@nestjs/common';
import { DriverRewardService } from './driver-reward.service';
import { DriverRewardController } from './driver-reward.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverReward } from './entities/driver-reward.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverReward])],
  controllers: [DriverRewardController],
  providers: [DriverRewardService],
})
export class DriverRewardModule {}
