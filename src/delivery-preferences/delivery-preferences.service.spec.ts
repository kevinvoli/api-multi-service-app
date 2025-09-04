import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryPreferencesService } from './delivery-preferences.service';

describe('DeliveryPreferencesService', () => {
  let service: DeliveryPreferencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryPreferencesService],
    }).compile();

    service = module.get<DeliveryPreferencesService>(DeliveryPreferencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
