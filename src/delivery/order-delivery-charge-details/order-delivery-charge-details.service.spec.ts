import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OrderDeliveryChargeDetailsService } from './order-delivery-charge-details.service';
import { OrderDeliveryChargeDetails } from './entities/order-delivery-charge-detail.entity';

const mockRepo = {
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn().mockResolvedValue(null),
  findOneBy: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockReturnValue({}),
  save: jest.fn().mockResolvedValue({}),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
  createQueryBuilder: jest.fn().mockReturnValue({
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    take: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockResolvedValue([]),
    getOne: jest.fn().mockResolvedValue(null),
    getManyAndCount: jest.fn().mockResolvedValue([[], 0]),
    getCount: jest.fn().mockResolvedValue(0),
  }),
};

describe('OrderDeliveryChargeDetailsService', () => {
  let service: OrderDeliveryChargeDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderDeliveryChargeDetailsService,
        { provide: getRepositoryToken(OrderDeliveryChargeDetails), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<OrderDeliveryChargeDetailsService>(OrderDeliveryChargeDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
