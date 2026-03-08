import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RestrictedNegativeAreaService } from './restricted-negative-area.service';
import { RestrictedNegativeArea } from './entities/restricted-negative-area.entity';

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

describe('RestrictedNegativeAreaService', () => {
  let service: RestrictedNegativeAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RestrictedNegativeAreaService,
        { provide: getRepositoryToken(RestrictedNegativeArea), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<RestrictedNegativeAreaService>(RestrictedNegativeAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
