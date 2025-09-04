import { Test, TestingModule } from '@nestjs/testing';
import { HomeContentFoodController } from './home-content-food.controller';
import { HomeContentFoodService } from './home-content-food.service';

describe('HomeContentFoodController', () => {
  let controller: HomeContentFoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeContentFoodController],
      providers: [HomeContentFoodService],
    }).compile();

    controller = module.get<HomeContentFoodController>(HomeContentFoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
