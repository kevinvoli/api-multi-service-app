import { Test, TestingModule } from '@nestjs/testing';
import { ObjectCategoriesController } from './object-categories.controller';
import { ObjectCategoriesService } from './object-categories.service';

describe('ObjectCategoriesController', () => {
  let controller: ObjectCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectCategoriesController],
      providers: [ObjectCategoriesService],
    }).compile();

    controller = module.get<ObjectCategoriesController>(ObjectCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
