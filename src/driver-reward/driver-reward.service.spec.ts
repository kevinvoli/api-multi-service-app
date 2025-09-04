import { Test, TestingModule } from '@nestjs/testing';
import { DriverRewardService } from './driver-reward.service';

describe('DriverRewardService', () => {
  let service: DriverRewardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverRewardService],
    }).compile();

    service = module.get<DriverRewardService>(DriverRewardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
