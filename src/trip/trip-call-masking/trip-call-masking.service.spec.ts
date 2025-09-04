import { Test, TestingModule } from '@nestjs/testing';
import { TripCallMaskingService } from './trip-call-masking.service';

describe('TripCallMaskingService', () => {
  let service: TripCallMaskingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripCallMaskingService],
    }).compile();

    service = module.get<TripCallMaskingService>(TripCallMaskingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
