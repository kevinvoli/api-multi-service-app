import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LanguageLabelOtherController } from './language-label-other.controller';
import { LanguageLabelOtherService } from './language-label-other.service';
import { LanguageLabelOther } from './entities/language-label-other.entity';

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

describe('LanguageLabelOtherController', () => {
  let controller: LanguageLabelOtherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageLabelOtherController],
      providers: [
        LanguageLabelOtherService,
        { provide: getRepositoryToken(LanguageLabelOther), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<LanguageLabelOtherController>(LanguageLabelOtherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
