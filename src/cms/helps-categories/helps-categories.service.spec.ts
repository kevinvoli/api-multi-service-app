import { Test, TestingModule } from '@nestjs/testing';
import { HelpsCategoriesService } from './helps-categories.service';

describe('HelpsCategoriesService', () => {
  let service: HelpsCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpsCategoriesService],
    }).compile();

    service = module.get<HelpsCategoriesService>(HelpsCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
