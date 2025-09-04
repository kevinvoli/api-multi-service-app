import { Test, TestingModule } from '@nestjs/testing';
import { OrderStatusLogsService } from './order-status-logs.service';

describe('OrderStatusLogsService', () => {
  let service: OrderStatusLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderStatusLogsService],
    }).compile();

    service = module.get<OrderStatusLogsService>(OrderStatusLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
