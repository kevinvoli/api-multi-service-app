import { Test, TestingModule } from '@nestjs/testing';
import { TripReasonService } from './trip-reason.service';

describe('TripReasonService', () => {
  let service: TripReasonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripReasonService],
    }).compile();

    service = module.get<TripReasonService>(TripReasonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
