import { Test, TestingModule } from '@nestjs/testing';
import { TripTimesService } from './trip-times.service';

describe('TripTimesService', () => {
  let service: TripTimesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripTimesService],
    }).compile();

    service = module.get<TripTimesService>(TripTimesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
