import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryFildsController } from './delivery-filds.controller';
import { DeliveryFildsService } from './delivery-filds.service';

describe('DeliveryFildsController', () => {
  let controller: DeliveryFildsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryFildsController],
      providers: [DeliveryFildsService],
    }).compile();

    controller = module.get<DeliveryFildsController>(DeliveryFildsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
