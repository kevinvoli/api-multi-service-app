import { Test, TestingModule } from '@nestjs/testing';
import { PaymentModelUserLogController } from './payment-model-user-log.controller';
import { PaymentModelUserLogService } from './payment-model-user-log.service';

describe('PaymentModelUserLogController', () => {
  let controller: PaymentModelUserLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentModelUserLogController],
      providers: [PaymentModelUserLogService],
    }).compile();

    controller = module.get<PaymentModelUserLogController>(PaymentModelUserLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
