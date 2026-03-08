import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LanguageLabel2Controller } from './language-label_2.controller';
import { LanguageLabel2Service } from './language-label_2.service';
import { LanguageLabel_2 } from './entities/language-label_2.entity';

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

describe('LanguageLabel2Controller', () => {
  let controller: LanguageLabel2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabel2Controller],
      providers: [
        LanguageLabel2Service,
        { provide: getRepositoryToken(LanguageLabel_2), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<LanguageLabel2Controller>(LanguageLabel2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
