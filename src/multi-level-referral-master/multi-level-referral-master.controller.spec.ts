import { Test, TestingModule } from '@nestjs/testing';
import { MultiLevelReferralMasterController } from './multi-level-referral-master.controller';
import { MultiLevelReferralMasterService } from './multi-level-referral-master.service';

describe('MultiLevelReferralMasterController', () => {
  let controller: MultiLevelReferralMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultiLevelReferralMasterController],
      providers: [MultiLevelReferralMasterService],
    }).compile();

    controller = module.get<MultiLevelReferralMasterController>(MultiLevelReferralMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
