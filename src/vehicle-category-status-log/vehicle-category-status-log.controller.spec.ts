import { Test, TestingModule } from '@nestjs/testing';
import { VehicleCategoryStatusLogController } from './vehicle-category-status-log.controller';
import { VehicleCategoryStatusLogService } from './vehicle-category-status-log.service';

describe('VehicleCategoryStatusLogController', () => {
  let controller: VehicleCategoryStatusLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleCategoryStatusLogController],
      providers: [VehicleCategoryStatusLogService],
    }).compile();

    controller = module.get<VehicleCategoryStatusLogController>(VehicleCategoryStatusLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
