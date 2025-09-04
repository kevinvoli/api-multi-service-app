import { Test, TestingModule } from '@nestjs/testing';
import { TripsRouteLocationsService } from './trips-route-locations.service';

describe('TripsRouteLocationsService', () => {
  let service: TripsRouteLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripsRouteLocationsService],
    }).compile();

    service = module.get<TripsRouteLocationsService>(TripsRouteLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
