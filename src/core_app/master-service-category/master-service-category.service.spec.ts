import { Test, TestingModule } from '@nestjs/testing';
import { MasterServiceCategoryService } from './master-service-category.service';

describe('MasterServiceCategoryService', () => {
  let service: MasterServiceCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterServiceCategoryService],
    }).compile();

    service = module.get<MasterServiceCategoryService>(MasterServiceCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
