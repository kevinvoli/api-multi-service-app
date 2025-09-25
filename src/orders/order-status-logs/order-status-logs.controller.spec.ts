import { Test, TestingModule } from '@nestjs/testing';
import { OrderStatusLogsController } from './order-status-logs.controller';
import { OrderStatusLogsService } from './order-status-logs.service';

describe('OrderStatusLogsController', () => {
  let controller: OrderStatusLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderStatusLogsController],
      providers: [OrderStatusLogsService],
    }).compile();

    controller = module.get<OrderStatusLogsController>(OrderStatusLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
