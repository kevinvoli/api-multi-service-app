import { Test, TestingModule } from '@nestjs/testing';
import { FoodMenuImagesController } from './food-menu-images.controller';
import { FoodMenuImagesService } from './food-menu-images.service';

describe('FoodMenuImagesController', () => {
  let controller: FoodMenuImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodMenuImagesController],
      providers: [FoodMenuImagesService],
    }).compile();

    controller = module.get<FoodMenuImagesController>(FoodMenuImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
