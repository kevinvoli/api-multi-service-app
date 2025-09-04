import { Test, TestingModule } from '@nestjs/testing';
import { OdaAreasLocationService } from './oda-areas-location.service';

describe('OdaAreasLocationService', () => {
  let service: OdaAreasLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OdaAreasLocationService],
    }).compile();

    service = module.get<OdaAreasLocationService>(OdaAreasLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
