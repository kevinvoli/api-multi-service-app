import { Test, TestingModule } from '@nestjs/testing';
import { PaymentCustomerInfoController } from './payment-customer-info.controller';
import { PaymentCustomerInfoService } from './payment-customer-info.service';

describe('PaymentCustomerInfoController', () => {
  let controller: PaymentCustomerInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentCustomerInfoController],
      providers: [PaymentCustomerInfoService],
    }).compile();

    controller = module.get<PaymentCustomerInfoController>(PaymentCustomerInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
