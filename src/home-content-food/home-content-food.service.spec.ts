import { Test, TestingModule } from '@nestjs/testing';
import { HomeContentFoodService } from './home-content-food.service';

describe('HomeContentFoodService', () => {
  let service: HomeContentFoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeContentFoodService],
    }).compile();

    service = module.get<HomeContentFoodService>(HomeContentFoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
