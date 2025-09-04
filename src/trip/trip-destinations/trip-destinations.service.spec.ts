import { Test, TestingModule } from '@nestjs/testing';
import { TripDestinationsService } from './trip-destinations.service';

describe('TripDestinationsService', () => {
  let service: TripDestinationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripDestinationsService],
    }).compile();

    service = module.get<TripDestinationsService>(TripDestinationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
