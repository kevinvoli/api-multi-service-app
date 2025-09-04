import { Test, TestingModule } from '@nestjs/testing';
import { OrderDriverLogService } from './order-driver-log.service';

describe('OrderDriverLogService', () => {
  let service: OrderDriverLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderDriverLogService],
    }).compile();

    service = module.get<OrderDriverLogService>(OrderDriverLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
