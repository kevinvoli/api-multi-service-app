import { Test, TestingModule } from '@nestjs/testing';
import { VehicleCategoryStatusLogService } from './vehicle-category-status-log.service';

describe('VehicleCategoryStatusLogService', () => {
  let service: VehicleCategoryStatusLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleCategoryStatusLogService],
    }).compile();

    service = module.get<VehicleCategoryStatusLogService>(VehicleCategoryStatusLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
