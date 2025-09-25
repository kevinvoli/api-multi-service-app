import { Test, TestingModule } from '@nestjs/testing';
import { StoreWiseBannersController } from './store-wise-banners.controller';
import { StoreWiseBannersService } from './store-wise-banners.service';

describe('StoreWiseBannersController', () => {
  let controller: StoreWiseBannersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreWiseBannersController],
      providers: [StoreWiseBannersService],
    }).compile();

    controller = module.get<StoreWiseBannersController>(StoreWiseBannersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
