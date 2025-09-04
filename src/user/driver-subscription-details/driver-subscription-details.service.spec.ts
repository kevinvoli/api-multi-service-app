import { Test, TestingModule } from '@nestjs/testing';
import { DriverSubscriptionDetailsService } from './driver-subscription-details.service';

describe('DriverSubscriptionDetailsService', () => {
  let service: DriverSubscriptionDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverSubscriptionDetailsService],
    }).compile();

    service = module.get<DriverSubscriptionDetailsService>(DriverSubscriptionDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
