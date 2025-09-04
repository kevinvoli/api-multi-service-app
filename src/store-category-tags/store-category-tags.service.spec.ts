import { Test, TestingModule } from '@nestjs/testing';
import { StoreCategoryTagsService } from './store-category-tags.service';

describe('StoreCategoryTagsService', () => {
  let service: StoreCategoryTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreCategoryTagsService],
    }).compile();

    service = module.get<StoreCategoryTagsService>(StoreCategoryTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
