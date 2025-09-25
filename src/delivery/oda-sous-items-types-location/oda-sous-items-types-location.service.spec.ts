import { Test, TestingModule } from '@nestjs/testing';
import { OdaSousItemsTypesLocationService } from './oda-sous-items-types-location.service';

describe('OdaSousItemsTypesLocationService', () => {
  let service: OdaSousItemsTypesLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OdaSousItemsTypesLocationService],
    }).compile();

    service = module.get<OdaSousItemsTypesLocationService>(OdaSousItemsTypesLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
