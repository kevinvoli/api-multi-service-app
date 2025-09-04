import { Test, TestingModule } from '@nestjs/testing';
import { TempTripOrderDetailsService } from './temp-trip-order-details.service';

describe('TempTripOrderDetailsService', () => {
  let service: TempTripOrderDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TempTripOrderDetailsService],
    }).compile();

    service = module.get<TempTripOrderDetailsService>(TempTripOrderDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
