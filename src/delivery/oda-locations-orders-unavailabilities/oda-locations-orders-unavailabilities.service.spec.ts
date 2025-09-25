import { Test, TestingModule } from '@nestjs/testing';
import { OdaLocationsOrdersUnavailabilitiesService } from './oda-locations-orders-unavailabilities.service';

describe('OdaLocationsOrdersUnavailabilitiesService', () => {
  let service: OdaLocationsOrdersUnavailabilitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OdaLocationsOrdersUnavailabilitiesService],
    }).compile();

    service = module.get<OdaLocationsOrdersUnavailabilitiesService>(OdaLocationsOrdersUnavailabilitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
