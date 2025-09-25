import { Test, TestingModule } from '@nestjs/testing';
import { StoreCategoryTagsController } from './store-category-tags.controller';
import { StoreCategoryTagsService } from './store-category-tags.service';

describe('StoreCategoryTagsController', () => {
  let controller: StoreCategoryTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreCategoryTagsController],
      providers: [StoreCategoryTagsService],
    }).compile();

    controller = module.get<StoreCategoryTagsController>(StoreCategoryTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
