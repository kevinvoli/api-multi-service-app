import { Test, TestingModule } from '@nestjs/testing';
import { PaymentCustomerInfoService } from './payment-customer-info.service';

describe('PaymentCustomerInfoService', () => {
  let service: PaymentCustomerInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentCustomerInfoService],
    }).compile();

    service = module.get<PaymentCustomerInfoService>(PaymentCustomerInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
