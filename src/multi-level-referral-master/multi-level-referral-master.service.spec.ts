import { Test, TestingModule } from '@nestjs/testing';
import { MultiLevelReferralMasterService } from './multi-level-referral-master.service';

describe('MultiLevelReferralMasterService', () => {
  let service: MultiLevelReferralMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultiLevelReferralMasterService],
    }).compile();

    service = module.get<MultiLevelReferralMasterService>(MultiLevelReferralMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
