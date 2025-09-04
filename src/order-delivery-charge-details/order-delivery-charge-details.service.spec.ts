import { Test, TestingModule } from '@nestjs/testing';
import { OrderDeliveryChargeDetailsService } from './order-delivery-charge-details.service';

describe('OrderDeliveryChargeDetailsService', () => {
  let service: OrderDeliveryChargeDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderDeliveryChargeDetailsService],
    }).compile();

    service = module.get<OrderDeliveryChargeDetailsService>(OrderDeliveryChargeDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
