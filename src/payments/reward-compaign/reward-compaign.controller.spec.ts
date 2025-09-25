import { Test, TestingModule } from '@nestjs/testing';
import { RewardCompaignController } from './reward-compaign.controller';
import { RewardCompaignService } from './reward-compaign.service';

describe('RewardCompaignController', () => {
  let controller: RewardCompaignController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RewardCompaignController],
      providers: [RewardCompaignService],
    }).compile();

    controller = module.get<RewardCompaignController>(RewardCompaignController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
