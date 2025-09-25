import { Test, TestingModule } from '@nestjs/testing';
import { OrderDriverLogController } from './order-driver-log.controller';
import { OrderDriverLogService } from './order-driver-log.service';

describe('OrderDriverLogController', () => {
  let controller: OrderDriverLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderDriverLogController],
      providers: [OrderDriverLogService],
    }).compile();

    controller = module.get<OrderDriverLogController>(OrderDriverLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
