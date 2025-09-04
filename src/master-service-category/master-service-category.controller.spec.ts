import { Test, TestingModule } from '@nestjs/testing';
import { MasterServiceCategoryController } from './master-service-category.controller';
import { MasterServiceCategoryService } from './master-service-category.service';

describe('MasterServiceCategoryController', () => {
  let controller: MasterServiceCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterServiceCategoryController],
      providers: [MasterServiceCategoryService],
    }).compile();

    controller = module.get<MasterServiceCategoryController>(MasterServiceCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
