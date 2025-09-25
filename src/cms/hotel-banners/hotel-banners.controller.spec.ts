import { Test, TestingModule } from '@nestjs/testing';
import { HotelBannersController } from './hotel-banners.controller';
import { HotelBannersService } from './hotel-banners.service';

describe('HotelBannersController', () => {
  let controller: HotelBannersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelBannersController],
      providers: [HotelBannersService],
    }).compile();

    controller = module.get<HotelBannersController>(HotelBannersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
