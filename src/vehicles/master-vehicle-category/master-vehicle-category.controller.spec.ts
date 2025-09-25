import { Test, TestingModule } from '@nestjs/testing';
import { MasterVehicleCategoryController } from './master-vehicle-category.controller';
import { MasterVehicleCategoryService } from './master-vehicle-category.service';

describe('MasterVehicleCategoryController', () => {
  let controller: MasterVehicleCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterVehicleCategoryController],
      providers: [MasterVehicleCategoryService],
    }).compile();

    controller = module.get<MasterVehicleCategoryController>(MasterVehicleCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
