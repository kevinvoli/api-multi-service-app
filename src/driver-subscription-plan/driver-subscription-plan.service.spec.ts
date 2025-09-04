import { Test, TestingModule } from '@nestjs/testing';
import { DriverSubscriptionPlanService } from './driver-subscription-plan.service';

describe('DriverSubscriptionPlanService', () => {
  let service: DriverSubscriptionPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverSubscriptionPlanService],
    }).compile();

    service = module.get<DriverSubscriptionPlanService>(DriverSubscriptionPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
