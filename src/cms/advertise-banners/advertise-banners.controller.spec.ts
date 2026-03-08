import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AdvertiseBannersController } from './advertise-banners.controller';
import { AdvertiseBannersService } from './advertise-banners.service';
import { AdvertiseBanners } from './entities/advertise-banner.entity';

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

describe('AdvertiseBannersController', () => {
  let controller: AdvertiseBannersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvertiseBannersController],
      providers: [
        AdvertiseBannersService,
        { provide: getRepositoryToken(AdvertiseBanners), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<AdvertiseBannersController>(AdvertiseBannersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
