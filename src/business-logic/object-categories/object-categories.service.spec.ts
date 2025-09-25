import { Test, TestingModule } from '@nestjs/testing';
import { ObjectCategoriesService } from './object-categories.service';

describe('ObjectCategoriesService', () => {
  let service: ObjectCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjectCategoriesService],
    }).compile();

    service = module.get<ObjectCategoriesService>(ObjectCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
