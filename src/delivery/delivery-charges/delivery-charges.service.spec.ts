import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryChargesService } from './delivery-charges.service';

describe('DeliveryChargesService', () => {
  let service: DeliveryChargesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryChargesService],
    }).compile();

    service = module.get<DeliveryChargesService>(DeliveryChargesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
