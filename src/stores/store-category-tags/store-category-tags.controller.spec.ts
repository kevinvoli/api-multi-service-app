import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { StoreCategoryTagsController } from './store-category-tags.controller';
import { StoreCategoryTagsService } from './store-category-tags.service';
import { StoreCategoryTags } from './entities/store-category-tag.entity';

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

describe('StoreCategoryTagsController', () => {
  let controller: StoreCategoryTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreCategoryTagsController],
      providers: [
        StoreCategoryTagsService,
        { provide: getRepositoryToken(StoreCategoryTags), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<StoreCategoryTagsController>(StoreCategoryTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
