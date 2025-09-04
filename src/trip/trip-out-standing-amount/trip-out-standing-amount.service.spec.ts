import { Test, TestingModule } from '@nestjs/testing';
import { TripOutStandingAmountService } from './trip-out-standing-amount.service';

describe('TripOutStandingAmountService', () => {
  let service: TripOutStandingAmountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripOutStandingAmountService],
    }).compile();

    service = module.get<TripOutStandingAmountService>(TripOutStandingAmountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
