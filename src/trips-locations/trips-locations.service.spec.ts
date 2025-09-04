import { Test, TestingModule } from '@nestjs/testing';
import { TripsLocationsService } from './trips-locations.service';

describe('TripsLocationsService', () => {
  let service: TripsLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripsLocationsService],
    }).compile();

    service = module.get<TripsLocationsService>(TripsLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
