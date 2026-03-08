import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DriverBiddingRequestController } from './driver-bidding-request.controller';
import { DriverBiddingRequestService } from './driver-bidding-request.service';
import { DriverBiddingRequest } from './entities/driver-bidding-request.entity';

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

describe('DriverBiddingRequestController', () => {
  let controller: DriverBiddingRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverBiddingRequestController],
      providers: [
        DriverBiddingRequestService,
        { provide: getRepositoryToken(DriverBiddingRequest), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<DriverBiddingRequestController>(DriverBiddingRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
