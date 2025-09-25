import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryChargesController } from './delivery-charges.controller';
import { DeliveryChargesService } from './delivery-charges.service';

describe('DeliveryChargesController', () => {
  let controller: DeliveryChargesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryChargesController],
      providers: [DeliveryChargesService],
    }).compile();

    controller = module.get<DeliveryChargesController>(DeliveryChargesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
