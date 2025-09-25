import { Test, TestingModule } from '@nestjs/testing';
import { DriverDestinationsRouteService } from './driver-destinations-route.service';

describe('DriverDestinationsRouteService', () => {
  let service: DriverDestinationsRouteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverDestinationsRouteService],
    }).compile();

    service = module.get<DriverDestinationsRouteService>(DriverDestinationsRouteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
