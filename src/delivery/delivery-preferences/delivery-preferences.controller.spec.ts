import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DeliveryPreferencesController } from './delivery-preferences.controller';
import { DeliveryPreferencesService } from './delivery-preferences.service';
import { DeliveryPreferences } from './entities/delivery-preference.entity';

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

describe('DeliveryPreferencesController', () => {
  let controller: DeliveryPreferencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryPreferencesController],
      providers: [
        DeliveryPreferencesService,
        { provide: getRepositoryToken(DeliveryPreferences), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<DeliveryPreferencesController>(DeliveryPreferencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
