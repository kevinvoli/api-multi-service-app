import { Test, TestingModule } from '@nestjs/testing';
import { PaymentModelUserLogService } from './payment-model-user-log.service';

describe('PaymentModelUserLogService', () => {
  let service: PaymentModelUserLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentModelUserLogService],
    }).compile();

    service = module.get<PaymentModelUserLogService>(PaymentModelUserLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
