import { Test, TestingModule } from '@nestjs/testing';
import { CustomDeliveryChargesOrderService } from './custom-delivery-charges-order.service';

describe('CustomDeliveryChargesOrderService', () => {
  let service: CustomDeliveryChargesOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomDeliveryChargesOrderService],
    }).compile();

    service = module.get<CustomDeliveryChargesOrderService>(CustomDeliveryChargesOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
