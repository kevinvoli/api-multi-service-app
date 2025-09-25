import { Test, TestingModule } from '@nestjs/testing';
import { AirportLocationMastersService } from './airport-location-masters.service';

describe('AirportLocationMastersService', () => {
  let service: AirportLocationMastersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirportLocationMastersService],
    }).compile();

    service = module.get<AirportLocationMastersService>(AirportLocationMastersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
