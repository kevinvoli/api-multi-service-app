import { Test, TestingModule } from '@nestjs/testing';
import { DriverFavoritesController } from './driver-favorites.controller';
import { DriverFavoritesService } from './driver-favorites.service';

describe('DriverFavoritesController', () => {
  let controller: DriverFavoritesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverFavoritesController],
      providers: [DriverFavoritesService],
    }).compile();

    controller = module.get<DriverFavoritesController>(DriverFavoritesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
