import { Test, TestingModule } from '@nestjs/testing';
import { OrderRequestController } from './order-request.controller';
import { OrderRequestService } from './order-request.service';

describe('OrderRequestController', () => {
  let controller: OrderRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderRequestController],
      providers: [OrderRequestService],
    }).compile();

    controller = module.get<OrderRequestController>(OrderRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
