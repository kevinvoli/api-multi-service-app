import { Test, TestingModule } from '@nestjs/testing';
import { RewardCompaignService } from './reward-compaign.service';

describe('RewardCompaignService', () => {
  let service: RewardCompaignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RewardCompaignService],
    }).compile();

    service = module.get<RewardCompaignService>(RewardCompaignService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
