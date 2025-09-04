import { Test, TestingModule } from '@nestjs/testing';
import { HelpsCategoriesController } from './helps-categories.controller';
import { HelpsCategoriesService } from './helps-categories.service';

describe('HelpsCategoriesController', () => {
  let controller: HelpsCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpsCategoriesController],
      providers: [HelpsCategoriesService],
    }).compile();

    controller = module.get<HelpsCategoriesController>(HelpsCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
