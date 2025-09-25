import { Test, TestingModule } from '@nestjs/testing';
import { LocationWiseFareService } from './location-wise-fare.service';

describe('LocationWiseFareService', () => {
  let service: LocationWiseFareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationWiseFareService],
    }).compile();

    service = module.get<LocationWiseFareService>(LocationWiseFareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
