import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MultiLevelReferralMasterController } from './multi-level-referral-master.controller';
import { MultiLevelReferralMasterService } from './multi-level-referral-master.service';
import { MultiLevelReferralMaster } from './entities/multi-level-referral-master.entity';

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

describe('MultiLevelReferralMasterController', () => {
  let controller: MultiLevelReferralMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultiLevelReferralMasterController],
      providers: [
        MultiLevelReferralMasterService,
        { provide: getRepositoryToken(MultiLevelReferralMaster), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<MultiLevelReferralMasterController>(MultiLevelReferralMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
