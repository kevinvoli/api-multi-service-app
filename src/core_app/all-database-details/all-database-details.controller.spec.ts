import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AllDatabaseDetailsController } from './all-database-details.controller';
import { AllDatabaseDetailsService } from './all-database-details.service';
import { AllDatabaseDetails } from './entities/all-database-detail.entity';

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

describe('AllDatabaseDetailsController', () => {
  let controller: AllDatabaseDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllDatabaseDetailsController],
      providers: [
        AllDatabaseDetailsService,
        { provide: getRepositoryToken(AllDatabaseDetails), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<AllDatabaseDetailsController>(AllDatabaseDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
