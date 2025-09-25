import { Test, TestingModule } from '@nestjs/testing';
import { HelpDetailCategoriesService } from './help-detail-categories.service';

describe('HelpDetailCategoriesService', () => {
  let service: HelpDetailCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpDetailCategoriesService],
    }).compile();

    service = module.get<HelpDetailCategoriesService>(HelpDetailCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
