import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CabBookingController } from './cab-booking.controller';
import { CabBookingService } from './cab-booking.service';
import { CabBooking } from './entities/cab-booking.entity';
import { RegisterUser } from '../../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../../users/register-driver/entities/register-driver.entity';

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

describe('CabBookingController', () => {
  let controller: CabBookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CabBookingController],
      providers: [
        CabBookingService,
        { provide: getRepositoryToken(CabBooking), useValue: mockRepo },
        { provide: getRepositoryToken(RegisterUser), useValue: mockRepo },
        { provide: getRepositoryToken(RegisterDriver), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<CabBookingController>(CabBookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
