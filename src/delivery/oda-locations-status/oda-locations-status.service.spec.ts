import { Test, TestingModule } from '@nestjs/testing';
import { OdaLocationsStatusService } from './oda-locations-status.service';

describe('OdaLocationsStatusService', () => {
  let service: OdaLocationsStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OdaLocationsStatusService],
    }).compile();

    service = module.get<OdaLocationsStatusService>(OdaLocationsStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
