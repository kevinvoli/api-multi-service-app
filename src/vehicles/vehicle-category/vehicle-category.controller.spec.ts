import { Test, TestingModule } from '@nestjs/testing';
import { VehicleCategoryController } from './vehicle-category.controller';
import { VehicleCategoryService } from './vehicle-category.service';

describe('VehicleCategoryController', () => {
  let controller: VehicleCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleCategoryController],
      providers: [VehicleCategoryService],
    }).compile();

    controller = module.get<VehicleCategoryController>(VehicleCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
