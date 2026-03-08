import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DriverVehicleServiceRequestController } from './driver-vehicle-service-request.controller';
import { DriverVehicleServiceRequestService } from './driver-vehicle-service-request.service';
import { DriverVehicleServiceRequest } from './entities/driver-vehicle-service-request.entity';

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

describe('DriverVehicleServiceRequestController', () => {
  let controller: DriverVehicleServiceRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverVehicleServiceRequestController],
      providers: [
        DriverVehicleServiceRequestService,
        { provide: getRepositoryToken(DriverVehicleServiceRequest), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<DriverVehicleServiceRequestController>(DriverVehicleServiceRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
