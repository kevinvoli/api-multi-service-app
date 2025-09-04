import { Test, TestingModule } from '@nestjs/testing';
import { TripsDeliveryLocationsService } from './trips-delivery-locations.service';

describe('TripsDeliveryLocationsService', () => {
  let service: TripsDeliveryLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripsDeliveryLocationsService],
    }).compile();

    service = module.get<TripsDeliveryLocationsService>(TripsDeliveryLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
