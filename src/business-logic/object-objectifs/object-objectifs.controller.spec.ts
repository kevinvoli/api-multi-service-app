import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectObjectifsController } from './object-objectifs.controller';
import { ObjectObjectifsService } from './object-objectifs.service';
import { ObjectObjectifs } from './entities/object-objectif.entity';

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

describe('ObjectObjectifsController', () => {
  let controller: ObjectObjectifsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectObjectifsController],
      providers: [
        ObjectObjectifsService,
        { provide: getRepositoryToken(ObjectObjectifs), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<ObjectObjectifsController>(ObjectObjectifsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
