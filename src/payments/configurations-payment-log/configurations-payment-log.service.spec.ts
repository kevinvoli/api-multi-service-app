import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationsPaymentLogService } from './configurations-payment-log.service';

describe('ConfigurationsPaymentLogService', () => {
  let service: ConfigurationsPaymentLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigurationsPaymentLogService],
    }).compile();

    service = module.get<ConfigurationsPaymentLogService>(ConfigurationsPaymentLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
