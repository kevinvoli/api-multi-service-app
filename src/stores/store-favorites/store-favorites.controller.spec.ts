import { Test, TestingModule } from '@nestjs/testing';
import { StoreFavoritesController } from './store-favorites.controller';
import { StoreFavoritesService } from './store-favorites.service';

describe('StoreFavoritesController', () => {
  let controller: StoreFavoritesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreFavoritesController],
      providers: [StoreFavoritesService],
    }).compile();

    controller = module.get<StoreFavoritesController>(StoreFavoritesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
