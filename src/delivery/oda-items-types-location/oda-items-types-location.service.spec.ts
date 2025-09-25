import { Test, TestingModule } from '@nestjs/testing';
import { OdaItemsTypesLocationService } from './oda-items-types-location.service';

describe('OdaItemsTypesLocationService', () => {
  let service: OdaItemsTypesLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OdaItemsTypesLocationService],
    }).compile();

    service = module.get<OdaItemsTypesLocationService>(OdaItemsTypesLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
