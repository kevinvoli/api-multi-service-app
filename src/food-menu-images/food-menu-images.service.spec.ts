import { Test, TestingModule } from '@nestjs/testing';
import { FoodMenuImagesService } from './food-menu-images.service';

describe('FoodMenuImagesService', () => {
  let service: FoodMenuImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodMenuImagesService],
    }).compile();

    service = module.get<FoodMenuImagesService>(FoodMenuImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
