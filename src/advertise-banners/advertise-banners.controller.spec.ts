import { Test, TestingModule } from '@nestjs/testing';
import { AdvertiseBannersController } from './advertise-banners.controller';
import { AdvertiseBannersService } from './advertise-banners.service';

describe('AdvertiseBannersController', () => {
  let controller: AdvertiseBannersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvertiseBannersController],
      providers: [AdvertiseBannersService],
    }).compile();

    controller = module.get<AdvertiseBannersController>(AdvertiseBannersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
