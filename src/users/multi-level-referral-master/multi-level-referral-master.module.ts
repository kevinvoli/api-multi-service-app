import { Module } from '@nestjs/common';
import { MultiLevelReferralMaster } from './entities/multi-level-referral-master.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MultiLevelReferralMasterService } from './multi-level-referral-master.service';
import { MultiLevelReferralMasterController } from './multi-level-referral-master.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MultiLevelReferralMaster])],
  controllers: [MultiLevelReferralMasterController],
  providers: [MultiLevelReferralMasterService],
  exports: [TypeOrmModule.forFeature([MultiLevelReferralMaster])],
})
export class MultiLevelReferralMasterModule {}
