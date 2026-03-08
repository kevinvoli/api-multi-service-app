import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserReferrerTransactionController } from './user-referrer-transaction.controller';
import { UserReferrerTransactionService } from './user-referrer-transaction.service';
import { UserReferrerTransaction } from './entities/user-referrer-transaction.entity';

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

describe('UserReferrerTransactionController', () => {
  let controller: UserReferrerTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserReferrerTransactionController],
      providers: [
        UserReferrerTransactionService,
        { provide: getRepositoryToken(UserReferrerTransaction), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<UserReferrerTransactionController>(UserReferrerTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
