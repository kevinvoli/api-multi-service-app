import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GopayOtpLogsController } from './gopay-otp-logs.controller';
import { GopayOtpLogsService } from './gopay-otp-logs.service';
import { GopayOtpLogs } from './entities/gopay-otp-log.entity';

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

describe('GopayOtpLogsController', () => {
  let controller: GopayOtpLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GopayOtpLogsController],
      providers: [
        GopayOtpLogsService,
        { provide: getRepositoryToken(GopayOtpLogs), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<GopayOtpLogsController>(GopayOtpLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
