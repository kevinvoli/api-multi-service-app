import { Test, TestingModule } from '@nestjs/testing';
import { HelpDetailCategoriesController } from './help-detail-categories.controller';
import { HelpDetailCategoriesService } from './help-detail-categories.service';

describe('HelpDetailCategoriesController', () => {
  let controller: HelpDetailCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpDetailCategoriesController],
      providers: [HelpDetailCategoriesService],
    }).compile();

    controller = module.get<HelpDetailCategoriesController>(HelpDetailCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
