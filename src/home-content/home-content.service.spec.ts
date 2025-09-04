import { Test, TestingModule } from '@nestjs/testing';
import { HomeContentService } from './home-content.service';

describe('HomeContentService', () => {
  let service: HomeContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeContentService],
    }).compile();

    service = module.get<HomeContentService>(HomeContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
