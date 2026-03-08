import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OdaSousServicesLocationController } from './oda-sous-services-location.controller';
import { OdaSousServicesLocationService } from './oda-sous-services-location.service';
import { OdaSousServicesLocation } from './entities/oda-sous-services-location.entity';

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

describe('OdaSousServicesLocationController', () => {
  let controller: OdaSousServicesLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdaSousServicesLocationController],
      providers: [
        OdaSousServicesLocationService,
        { provide: getRepositoryToken(OdaSousServicesLocation), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<OdaSousServicesLocationController>(OdaSousServicesLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
