import { Test, TestingModule } from '@nestjs/testing';
import { MasterVehicleCategoryService } from './master-vehicle-category.service';

describe('MasterVehicleCategoryService', () => {
  let service: MasterVehicleCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterVehicleCategoryService],
    }).compile();

    service = module.get<MasterVehicleCategoryService>(MasterVehicleCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
