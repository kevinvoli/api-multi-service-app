import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryFildsService } from './delivery-filds.service';

describe('DeliveryFildsService', () => {
  let service: DeliveryFildsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryFildsService],
    }).compile();

    service = module.get<DeliveryFildsService>(DeliveryFildsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
