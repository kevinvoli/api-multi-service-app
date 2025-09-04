import { Test, TestingModule } from '@nestjs/testing';
import { TripHelpDetailService } from './trip-help-detail.service';

describe('TripHelpDetailService', () => {
  let service: TripHelpDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripHelpDetailService],
    }).compile();

    service = module.get<TripHelpDetailService>(TripHelpDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
