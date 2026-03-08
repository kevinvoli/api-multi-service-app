import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { WalletMoneyReferrerEmailService } from './wallet-money-referrer-email.service';
import { WalletMoneyReferrerEmail } from './entities/wallet-money-referrer-email.entity';

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

describe('WalletMoneyReferrerEmailService', () => {
  let service: WalletMoneyReferrerEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WalletMoneyReferrerEmailService,
        { provide: getRepositoryToken(WalletMoneyReferrerEmail), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<WalletMoneyReferrerEmailService>(WalletMoneyReferrerEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
