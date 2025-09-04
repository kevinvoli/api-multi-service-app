import { Test, TestingModule } from '@nestjs/testing';
import { DriverDestinationsService } from './driver-destinations.service';

describe('DriverDestinationsService', () => {
  let service: DriverDestinationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverDestinationsService],
    }).compile();

    service = module.get<DriverDestinationsService>(DriverDestinationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
