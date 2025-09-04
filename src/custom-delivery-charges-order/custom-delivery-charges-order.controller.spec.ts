import { Test, TestingModule } from '@nestjs/testing';
import { CustomDeliveryChargesOrderController } from './custom-delivery-charges-order.controller';
import { CustomDeliveryChargesOrderService } from './custom-delivery-charges-order.service';

describe('CustomDeliveryChargesOrderController', () => {
  let controller: CustomDeliveryChargesOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomDeliveryChargesOrderController],
      providers: [CustomDeliveryChargesOrderService],
    }).compile();

    controller = module.get<CustomDeliveryChargesOrderController>(CustomDeliveryChargesOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
