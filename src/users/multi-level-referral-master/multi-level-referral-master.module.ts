import { Module } from '@nestjs/common';
import { MultiLevelReferralMasterService } from './multi-level-referral-master.service';
import { MultiLevelReferralMasterController } from './multi-level-referral-master.controller';

@Module({
  controllers: [MultiLevelReferralMasterController],
  providers: [MultiLevelReferralMasterService],
})
export class MultiLevelReferralMasterModule {}
