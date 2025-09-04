import { Test, TestingModule } from '@nestjs/testing';
import { TripsStopoverpointLocationService } from './trips-stopoverpoint-location.service';

describe('TripsStopoverpointLocationService', () => {
  let service: TripsStopoverpointLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripsStopoverpointLocationService],
    }).compile();

    service = module.get<TripsStopoverpointLocationService>(TripsStopoverpointLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
