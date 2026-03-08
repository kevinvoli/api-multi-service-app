import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LanguageLabel1Controller } from './language-label_1.controller';
import { LanguageLabel1Service } from './language-label_1.service';
import { LanguageLabel_1 } from './entities/language-label_1.entity';

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

describe('LanguageLabel1Controller', () => {
  let controller: LanguageLabel1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabel1Controller],
      providers: [
        LanguageLabel1Service,
        { provide: getRepositoryToken(LanguageLabel_1), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<LanguageLabel1Controller>(LanguageLabel1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
