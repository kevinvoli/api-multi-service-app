import { Test, TestingModule } from '@nestjs/testing';
import { TripOderDetailsService } from './trip-oder-details.service';

describe('TripOderDetailsService', () => {
  let service: TripOderDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripOderDetailsService],
    }).compile();

    service = module.get<TripOderDetailsService>(TripOderDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
