import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationsPaymentLogController } from './configurations-payment-log.controller';
import { ConfigurationsPaymentLogService } from './configurations-payment-log.service';

describe('ConfigurationsPaymentLogController', () => {
  let controller: ConfigurationsPaymentLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfigurationsPaymentLogController],
      providers: [ConfigurationsPaymentLogService],
    }).compile();

    controller = module.get<ConfigurationsPaymentLogController>(ConfigurationsPaymentLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
