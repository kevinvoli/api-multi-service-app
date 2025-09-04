import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationsPaymentsService } from './configurations-payments.service';

describe('ConfigurationsPaymentsService', () => {
  let service: ConfigurationsPaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigurationsPaymentsService],
    }).compile();

    service = module.get<ConfigurationsPaymentsService>(ConfigurationsPaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
