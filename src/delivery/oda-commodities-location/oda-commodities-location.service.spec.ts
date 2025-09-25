import { Test, TestingModule } from '@nestjs/testing';
import { OdaCommoditiesLocationService } from './oda-commodities-location.service';

describe('OdaCommoditiesLocationService', () => {
  let service: OdaCommoditiesLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OdaCommoditiesLocationService],
    }).compile();

    service = module.get<OdaCommoditiesLocationService>(OdaCommoditiesLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
