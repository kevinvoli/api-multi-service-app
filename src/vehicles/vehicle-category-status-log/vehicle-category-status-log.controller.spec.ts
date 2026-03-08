import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { VehicleCategoryStatusLogController } from './vehicle-category-status-log.controller';
import { VehicleCategoryStatusLogService } from './vehicle-category-status-log.service';
import { VehicleCategoryStatusLog } from './entities/vehicle-category-status-log.entity';

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

describe('VehicleCategoryStatusLogController', () => {
  let controller: VehicleCategoryStatusLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleCategoryStatusLogController],
      providers: [
        VehicleCategoryStatusLogService,
        { provide: getRepositoryToken(VehicleCategoryStatusLog), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<VehicleCategoryStatusLogController>(VehicleCategoryStatusLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
