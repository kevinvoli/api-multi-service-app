import { Module } from '@nestjs/common';
import { MultiLevelReferralMasterService } from './multi-level-referral-master.service';
import { MultiLevelReferralMasterController } from './multi-level-referral-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MultiLevelReferralMaster } from './entities/multi-level-referral-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MultiLevelReferralMaster])],
  controllers: [MultiLevelReferralMasterController],
  providers: [MultiLevelReferralMasterService],
})
export class MultiLevelReferralMasterModule {}
