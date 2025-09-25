import { Test, TestingModule } from '@nestjs/testing';
import { FlyLocationWiseFareService } from './fly-location-wise-fare.service';

describe('FlyLocationWiseFareService', () => {
  let service: FlyLocationWiseFareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlyLocationWiseFareService],
    }).compile();

    service = module.get<FlyLocationWiseFareService>(FlyLocationWiseFareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
