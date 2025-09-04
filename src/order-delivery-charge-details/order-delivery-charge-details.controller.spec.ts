import { Test, TestingModule } from '@nestjs/testing';
import { OrderDeliveryChargeDetailsController } from './order-delivery-charge-details.controller';
import { OrderDeliveryChargeDetailsService } from './order-delivery-charge-details.service';

describe('OrderDeliveryChargeDetailsController', () => {
  let controller: OrderDeliveryChargeDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderDeliveryChargeDetailsController],
      providers: [OrderDeliveryChargeDetailsService],
    }).compile();

    controller = module.get<OrderDeliveryChargeDetailsController>(OrderDeliveryChargeDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
