import { Test, TestingModule } from '@nestjs/testing';
import { DriverManageTimingService } from './driver-manage-timing.service';

describe('DriverManageTimingService', () => {
  let service: DriverManageTimingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverManageTimingService],
    }).compile();

    service = module.get<DriverManageTimingService>(DriverManageTimingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
