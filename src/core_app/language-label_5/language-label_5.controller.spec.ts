import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LanguageLabel5Controller } from './language-label_5.controller';
import { LanguageLabel5Service } from './language-label_5.service';
import { LanguageLabel_5 } from './entities/language-label_5.entity';

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

describe('LanguageLabel5Controller', () => {
  let controller: LanguageLabel5Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabel5Controller],
      providers: [
        LanguageLabel5Service,
        { provide: getRepositoryToken(LanguageLabel_5), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<LanguageLabel5Controller>(LanguageLabel5Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
