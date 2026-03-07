import { Module } from '@nestjs/common';
import { DriverReward } from './entities/driver-reward.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverRewardService } from './driver-reward.service';
import { DriverRewardController } from './driver-reward.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverReward])],
  controllers: [DriverRewardController],
  providers: [DriverRewardService],
  exports: [TypeOrmModule.forFeature([DriverReward])],
})
export class DriverRewardModule {}
