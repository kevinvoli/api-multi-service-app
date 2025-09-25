import { Test, TestingModule } from '@nestjs/testing';
import { HomeScreensService } from './home-screens.service';

describe('HomeScreensService', () => {
  let service: HomeScreensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeScreensService],
    }).compile();

    service = module.get<HomeScreensService>(HomeScreensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
