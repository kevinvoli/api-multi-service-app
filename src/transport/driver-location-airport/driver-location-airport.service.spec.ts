import { Test, TestingModule } from '@nestjs/testing';
import { DriverLocationAirportService } from './driver-location-airport.service';

describe('DriverLocationAirportService', () => {
  let service: DriverLocationAirportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverLocationAirportService],
    }).compile();

    service = module.get<DriverLocationAirportService>(DriverLocationAirportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
